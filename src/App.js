import React, { Component, Fragment } from 'react';
import { withRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import 'App.css';

// Component
import Menu from 'components/Menu'
// Pages
import NotFound from 'pages/NotFound'
import Home from 'pages/Home'
import routes from 'routes'

const App = ({ location, history }) => {
  return (
    <Fragment>
      <Menu location={location} />
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/hello" children={({match}) => <div>Hello</div>} />
          {/* {routes.map(
            ({ href, component, exact }) =>
              <Route key={href} exact={exact} path={href} component={component} />
          )} */}
          <Route component={NotFound} />
        </Switch>
    </Fragment>
  )
}

export default withRouter(App);
