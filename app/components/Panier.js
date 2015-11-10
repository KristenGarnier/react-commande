import React from 'react';
import ItemList from './ItemList';

let Panier = React.createClass({
    getInitialState(){
        return this.state = {
            panier: [
                JSON.parse(sessionStorage.getItem('panier'))
            ]
        };
    },
    render(){
        return (
            <div>
                <h2>Votre panier</h2>
                <ItemList options={this.state.panier} route="/" />
            </div>
        )
    }
});

export default Panier;
