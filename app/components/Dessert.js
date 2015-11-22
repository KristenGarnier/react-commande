import React from 'react';
import ItemList from './ItemList';
import helpers from './utils/helpers';

let Router = require('react-router');

let Dessert = React.createClass({
    mixins: [Router.History],
    getInitialState(){
        return this.state = {
            desserts: [
                {
                    id: '1',
                    nom: 'Tarte à la fraise',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Imagemagick-logo.png'
                },
                {
                    id: '2',
                    nom: 'Gateau au chocolat',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Imagemagick-logo.png'
                },
                {
                    id: '3',
                    nom: 'Pêche melba',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Imagemagick-logo.png'
                }
            ]
        };

    },
    handleClick(item){
        helpers.setSession('panier', item, true);
        this.history.pushState(null, '/panier');
    },
    render() {
        return (
            <div>
                <h2 >Choisissez votre Dessert</h2>
                <ItemList options={this.state.desserts} click={this.handleClick}/>
            </div>
        )
    }
});

export default Dessert;
