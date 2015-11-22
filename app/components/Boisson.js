import React from 'react';
import ItemList from './ItemList';
import helpers from './utils/helpers';

let Router = require('react-router');

let Boisson = React.createClass({
    mixins: [Router.History],
    getInitialState(){

        return this.state = {
            boissons: [
                {
                    id: '1',
                    nom: 'Coca',
                    image:'https://facebook.github.io/react/img/logo_og.png'
                },
                {
                    id: '2',
                    nom: 'Orangina',
                    image:'https://facebook.github.io/react/img/logo_og.png'
                },
                {
                    id: '3',
                    nom: 'Shweps',
                    image: 'https://facebook.github.io/react/img/logo_og.png'
                }
            ]
        };

    },
    handleClick(item){
        helpers.setSession('panier', item, true);
        this.history.pushState(null, '/desserts');
    },
    render() {
        return (
            <div>
                <h2 >Choisissez votre Boisson</h2>
                <ItemList options={this.state.boissons} click={this.handleClick}/>
            </div>
        )
    }
});

export default Boisson;
