// IDEA: совместить позже это меню и основное
import React, { Component } from 'react';
import _ from 'lodash'
import { Link, MenuLeft, MenuTop } from 'components'
import menu from './home_menus'

// to Utils file
const getColor = (hash) => _.get(_.find(menu, { hash }), 'color')
const getIndex = (hash) => _.findIndex(_.filter(menu, { menu: true }), { hash })

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      scrolled: false,
    }
  }

  handleMenuToggle = (state) => {
    this.setState((prevState, props) => ({
      isOpen: typeof state === 'boolean' ? state : !prevState.isOpen
    }))
  }

  handleLink = (href) => {
    let index = getIndex(href)+2
    if (window && window.fpTurnTo) {
      window.fpTurnTo(index)
    }
    this.handleMenuToggle(false)
  }

  componentDidMount() {
    let { hash } = this.props
    let menuHash = hash.slice(1)
    this.handleLink(menuHash)
  }

  render() {
    let { hash } = this.props
    let menuHash = hash.slice(1)
    let { isOpen } = this.state
    let color = getColor(hash.slice(1))

    // определяем где отображается меню
    // if (!location) { location = { hash } }
    // if (location.pathname === '/') return <div />

    return (
      <div>
        <MenuTop
          fixed={this.props.fixed}
          color={color}
          isOpen={isOpen}
          handleMenuToggle={this.handleMenuToggle}
          handleLink={this.handleLink}
        />
        <MenuLeft
          color={color}
          isOpen={isOpen}
        >
          {_.map(_.filter(menu, { menu: true }), ({ hash, title }) =>
            <Link
              key={hash}
              to={`/#${hash}`}
              className={hash === menuHash ? 'active' : '' }
              onClick={() => this.handleLink(hash)}
            >{title}</Link>
          )}
        </MenuLeft>
      </div>
    );
  }
}

export default Menu;
