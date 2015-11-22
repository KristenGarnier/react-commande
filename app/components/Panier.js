import React from 'react';
import ItemList from './ItemList';

let Panier = React.createClass({
    getInitialState(){
        let panierSession = JSON.parse(sessionStorage.getItem('panier')), index, panierProduits;
        panierSession.forEach((item, i)=> {
            if(item.menu !== null){
                index = i;
            }
        });
        panierProduits = panierSession.map(function(item){
            if(item.menu === null){
                return item;
            }
        });
        return this.state = {
            panierMenu: panierSession[index].menu,
            panierProduits: panierProduits[0] == undefined ? panierProduits = [] : panierProduits
        };
    },
    render(){
        return (
            <div>
                <h2>Votre panier</h2>
                <ItemList options={this.state.panierMenu} />
                <ItemList options={this.state.panierProduits} />
            </div>
        )
    }
});

export default Panier;
