import React from 'react';

let Router = require('react-router');

let Navigation = React.createClass({
    mixins: [Router.History],
    handleNav(route){
        switch(route){
            case 'restaurant':
                this.history.pushState(null, `/`);
                break;
            case 'produits':
                this.history.pushState(null, `/${route}`);
                break;
            case 'boissons':
                this.history.pushState(null, `/${route}`);
                break;
            case 'desserts':
                this.history.pushState(null, `/${route}`);
                break;
        }
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
                            <li><button className="btn btn-primary">Restaurants</button></li>
                            <li><button className="btn btn-primary" >Menus</button></li>
                            <li><button className="btn btn-primary" >Boissons</button></li>
                            <li><button className="btn btn-primary" >Desserts</button></li>
                        </ul>
                    </div>
                </div>
        )
    }
});

export default Navigation;