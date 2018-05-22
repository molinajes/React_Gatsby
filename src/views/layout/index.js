import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../home';
import routes from '../routes.js' ;
import template from './template.pug';
 
const Layout = () =>
        template.call(this, {
            Route,
            Switch,
            Home,            
            routes   
        });
            

                
        
  ;

Layout.displayName = 'Layout';

export default Layout;
