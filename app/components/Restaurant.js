import React from 'react';
import RestaurantList from './RestaurantList';

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
      <div>
          <select ref="restaurant">
            <RestaurantList restaurants={this.state.restaurants} />
          </select>
          <button onClick={this.handleClick}> Envoyer</button>
      </div>
    )
  }
});

export default Restaurant;
