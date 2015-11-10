import React from 'react';
import Link from 'react-router';
import ItemList from './ItemList';

let Produit = React.createClass({
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
  render() {
    return (
      <div>
        <h2 >Choisissez votre menu</h2>
            <ItemList options={this.state.produits} route="/boissons" />
      </div>
    )
  }
});

export default Produit;
