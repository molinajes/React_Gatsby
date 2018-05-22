import React, { Component } from 'react';
import './stylesheets/style.scss';
import Header from './components/header';
import Footer from './components/footer';
import Layout from './views/layout';
import Menu from './components/menu';
import template from './template.pug';
class App extends Component {
    render() {
        return template.call(this, {
            Header,
            Menu,
            Footer,
            Layout
        });
    }
};

export default App;
