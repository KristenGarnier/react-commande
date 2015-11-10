import React from 'react';
import ItemList from './ItemList';

let Boisson = React.createClass({
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

    render() {
        return (
            <div>
                <h2 >Choisissez votre Boisson</h2>
                <ItemList options={this.state.boissons} route="/desserts"/>
            </div>
        )
    }
});

export default Boisson;
