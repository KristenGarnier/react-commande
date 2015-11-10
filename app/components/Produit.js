import React from 'react';
import {Router, Link} from 'react-router';
import OptionList from './OptionList';

let Produit = React.createClass({
  mixins: [Router.State],
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

  render() {
    console.log(this.props.params.id);
    return (
      <div className="form-group">
        <label >Choisissez votre menu</label>
          <select ref="produit" className="form-control">
            <OptionList options={this.state.produits} />
          </select>
          <Link to="/" className="btn btn-default" > Revenir aux restaurants </Link>
      </div>
    )
  }
});

export default Produit;
