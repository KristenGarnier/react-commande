import React from 'react';
import Navigation from './Navigation';
import Panier from './Panier';

let RouteHandler = require('react-router').RouteHandler;

let Main = React.createClass({
    getInitialState(){
        return this.state = {
            panier: []
        }
    },
    render() {
        console.log(this.props.children);
        return (
            <div className="main-container">
                <nav className="navbar navbar-default">
                    <Navigation />
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default Main;