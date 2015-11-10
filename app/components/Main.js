import React from 'react';
import Navigation from './Navigation';
import Panier from './Panier';

let RouteHandler = require('react-router').RouteHandler;

let Main =  React.createClass({
    getInitialState(){
        return this.state = {
            panier : []
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
                    <div className="row">
                        <div className="col col-md-8">
                            {this.props.children}
                        </div>
                        <div className="col col-md-4">
                            <h2>Panier</h2>
                            <Panier />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
});

export default Main;