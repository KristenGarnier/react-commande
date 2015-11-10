import React from 'react';
import OptionList from './OptionList';

let Router = require('react-router');

let Dessert = React.createClass({
  mixins: [Router.History],
  getInitialState(){

    return this.state = {
      restaurants: [
        {
          value: '1',
          nom: 'Tarte à la fraise'
        },
        {
          value: '2',
          nom: 'Gateau au chocolat'
        },
        {
          value: '3',
          nom: 'Pêche melba'
        }
      ]
    };

  },
  render() {
    return (
      <div className="form-group">
        <label >Choississez votre dessert - {this.props.params.id}</label>
          <select ref="boisson" className="form-control">
            <OptionList options={this.state.restaurants} />
          </select>
      </div>
    )
  }
});

export default Dessert;
