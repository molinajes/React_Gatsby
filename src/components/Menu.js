// IDEA: совместить с неосновым меню
import React, { Component } from 'react';
import _ from 'lodash'
import { Link, MenuLeft, MenuTop, Copyrights } from 'components'
import menu from './menus'

// to Utils file
const getColor = (href) => _.get(_.find(menu, { href }), 'color')
const getIndex = (href) => _.findIndex(_.filter(menu, { menu: true }), { href })

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleMenuToggle = (state) => {
    this.setState((prevState, props) => ({
      isOpen: typeof state === 'boolean' ? state : !prevState.isOpen
    }))
  }

  handleLink = (href) => {
    this.handleMenuToggle(false)
  }

  render() {
    let { backBeh, href } = this.props
    let hrefF = href.split('/')[0] || href.split('/')[1]
    let menuHref = href.slice(1)
    let { isOpen } = this.state
    let color = getColor(hrefF)
    if (this.props.color) { color = this.props.color }

    // определяем где отображается меню
    // if (!location) { location = { href } }
    // if (location.pathname === '/') return <div />

    return (
      <div>
        <MenuTop
          color={color}
          isOpen={isOpen}
          handleMenuToggle={this.handleMenuToggle}
          handleLink={this.handleLink}
        />
        <MenuLeft
          color={color}
          isOpen={isOpen}
        >
          { backBeh ?
            <Link
              to={backBeh.link || '/'}
              className="link-with-arrow-inverted back-button"
            >{backBeh.title}</Link>
            :
            <div
              className="link-with-arrow-inverted back-button"
              onClick={() => { window.history && window.history.back(); this.handleLink(href) }}
            >Back</div>
          }

          {_.map(_.filter(menu, { menu: true }), ({ href, title }) =>
            <Link
              activeClassName="active"
              key={href}
              to={`/${href}`}
              className={href === menuHref ? 'active' : '' }
              onClick={() => this.handleLink(href)}
            >{title}</Link>
          )}
        </MenuLeft>
        <Copyrights color={color} />
      </div>
    );
  }
}

export default Menu;
