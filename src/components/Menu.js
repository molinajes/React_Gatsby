import React, { Component, Fragment } from 'react';
import _ from 'lodash'
import { getColor, getIndex, getHash } from 'utils'
import routes from 'routes'

// Components
import { Link, MenuLeft, MenuTop } from 'components'

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
    this.props.scrollToSlide(getIndex(href)+1)
    this.handleMenuToggle(false)
  }

  render() {
    let { location, hash } = this.props
    let { isOpen } = this.state
    if (!location) { location = { hash } }

    if (location.pathname === '/') return <div />

    return (
      <Fragment>
        <MenuTop
          color={getColor(`/${location.hash}`)}
          handleMenuToggle={this.handleMenuToggle}
          isOpen={isOpen}
          handleLink={this.handleLink}
        />
        <MenuLeft
          color={getColor(`/${location.hash}`)}
          isOpen={isOpen}
        >
          {_.map(_.filter(routes, { menu: 1 }), ({href, title}) =>
            <Link key={href} to={href} onClick={() => this.handleLink(href)}>{title}</Link>
          )}
        </MenuLeft>
      </Fragment>
    );
  }
}

export default Menu;
