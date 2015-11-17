import React from 'react';
import Link from 'react-router';
import ItemList from './ItemList';
import helpers from './utils/helpers';

let Router = require('react-router');

let Produit = React.createClass({
  mixins: [Router.History],
  getInitialState() {
    return this.state = {
      produits: [
        {
          id: '1',
          nom: 'Maxi Burger',
          image:'https://www.codementor.io/assets/tutorial_icon/reactjs.png'
        },
        {
          id: '2',
          nom: 'Tacos ta mère',
          image: 'https://www.codementor.io/assets/tutorial_icon/reactjs.png'
        },
        {
          id: '3',
          nom: 'Kebab malobid',
          image:'https://www.codementor.io/assets/tutorial_icon/reactjs.png'
        }
      ]
    };
  },
  handleClick(item){
    helpers.setSession('panier', item, true);
    //this.history.pushState(null, this.props.route);
  },
  render() {
    return (
      <div>
        <h2 >Choisissez votre menu</h2>
            <ItemList options={this.state.produits} click={this.handleClick} />
      </div>
    )
  }
});

export default Produit;
