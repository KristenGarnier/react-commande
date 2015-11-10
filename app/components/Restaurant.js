import React from 'react';
import OptionList from './OptionList';

let Router = require('react-router');

let Restaurant = React.createClass({
  mixins: [Router.History],
  getInitialState(){

    return this.state = {
      restaurants: [
        {
          value: 'test',
          nom: 'Kristen'
        },
        {
          value: 'youyou',
          nom: 'Hello'
        },
        {
          value: 'lol',
          nom: 'World'
        }
      ]
    };

  },

  handleClick(e){
    e.preventDefault();
    let restaurants = this.refs.restaurant.getDOMNode().value;
    this.history.pushState(null, `/produits/${restaurants}`);
  },

  render() {
    return (
      <div className="form-group">
        <label >Choississez votre restaurant</label>
          <select ref="restaurant" className="form-control">
            <OptionList options={this.state.restaurants} />
          </select>
          <button className="btn btn-primary" onClick={this.handleClick}> Envoyer</button>
      </div>
    )
  }
});

export default Restaurant;
