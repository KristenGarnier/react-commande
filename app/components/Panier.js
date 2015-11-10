import React from 'react';

let Panier = React.createClass({
    getInitialState(){
        return this.state = {
            panier : JSON.parse(sessionStorage.getItem('panier'))
        };
    },
    render(){
        console.log(sessionStorage.getItem('panier'));
        return (
            <p>{this.state.panier}</p>
        )
    }
});

export default Panier;
