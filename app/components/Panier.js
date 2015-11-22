import React from 'react';
import ItemList from './ItemList';

let Panier = React.createClass({
    getInitialState(){
        let panierSession = JSON.parse(sessionStorage.getItem('panier')), index;
        panierSession.forEach((item, i)=> {
            if(item.menu !== null){
                index = i;
            }
        });
        return this.state = {
            panier: panierSession,
            index: index
        };
    },
    render(){
        console.log(this.state.panier[0].menu);
        return (
            <div>
                <h2>Votre panier</h2>
                <ItemList options={this.state.panier[this.state.index].menu} />
            </div>
        )
    }
});

export default Panier;
