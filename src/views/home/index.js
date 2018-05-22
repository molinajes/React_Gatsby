import React, { Component } from 'react';
import './style.scss';
import template from './template.pug'


import Mainblock from '../../components/mainblock'

class Home extends Component {    
    render() {          
        return template.call(this,{             
            Mainblock
        });
    }
};

export default Home;