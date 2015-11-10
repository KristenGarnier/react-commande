import React from 'react';
import Link from 'react-router';
import OptionList from './OptionList';

let Router = require('react-router');

let Produit = React.createClass({
  mixins: [Router.History],
  getInitialState() {
    return this.state = {
      produits: [
        {
          value: '1',
          nom: 'Maxi Burger'
        },
        {
          value: '2',
          nom: 'Tacos ta mère'
        },
        {
          value: '3',
          nom: 'Kebab malobid'
        }
      ]
    };
  },
  handleClick(e){
    e.preventDefault();
    let produit = this.refs.produit.getDOMNode().value;
    this.history.pushState(null, `/boissons/${produit}`);
  },

  render() {
    console.log(this.props.params.id);
    return (
      <div className="form-group">
        <label >Choisissez votre menu - {this.props.params.id}</label>
          <select ref="produit" className="form-control">
            <OptionList options={this.state.produits} />
          </select>
          <button className="btn btn-primary" onClick={this.handleClick}> Continuer</button>
          <Link to="/" className="btn btn-default" > Revenir aux restaurants </Link>
      </div>
    )
  }
});

export default Produit;
