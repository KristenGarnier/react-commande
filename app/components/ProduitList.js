import React from 'react';

class ProduitList extends React.Component{
  render(){
    let produits = this.props.restaurants.map((produit, index) => {
      return <option value={produit.value}  key={index}>{produit.nom}</option>;
    });

    return(
      <span>
        {produits}
      </span>
    )
  }
}

export default ProduitList;
