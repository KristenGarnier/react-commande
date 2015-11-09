import React from 'react';
import ProduitList from './ProduitList';

let Produit = React.createClass({
  getInitialState() {
    return this.state = {
      produits: [
        {
          value: '1',
          nom: 'Tomates'
        },
        {
          value: '2',
          nom: 'Salade'
        },
        {
          value: '3',
          nom: 'Oignons'
        }
      ]
    };
  },
  componentWillReceiveProps(props){
    console.log(this.props);
  },

  render() {
    return (
      <div>
          <select ref="produit">
            <ProduitList restaurants={this.state.produits} />
          </select>
      </div>
    )
  }
});

export default Produit;
