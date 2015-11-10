import React from 'react';

let Router = require('react-router');

let Navigation = React.createClass({
    mixins: [Router.History],
    handleRestaurant(){
        this.history.pushState(null, '/restaurant');
    },
    handleMenu(){
        this.history.pushState(null, '/produits');
    },
    handleBoisson(){
        this.history.pushState(null, '/boissons');
    },
    handleDessert(){
        this.history.pushState(null, '/desserts');
    },
    handlePanier(){
        this.history.pushState(null, '/panier');
    },
    render() {
        return (
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">BRAND</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><button className="btn btn-primary" onClick={this.handleRestaurant}>Restaurants</button></li>
                            <li><button className="btn btn-primary" onClick={this.handleMenu}>Menus</button></li>
                            <li><button className="btn btn-primary" onClick={this.handleBoisson}>Boissons</button></li>
                            <li><button className="btn btn-primary" onClick={this.handleDessert}>Desserts</button></li>
                            <li><button className="btn btn-primary" onClick={this.handlePanier}>Panier</button></li>
                        </ul>
                    </div>
                </div>
        )
    }
});

export default Navigation;