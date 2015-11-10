import React from 'react';
import OptionList from './OptionList';

let Router = require('react-router');

let Boisson = React.createClass({
  mixins: [Router.History],
  getInitialState(){

    return this.state = {
      restaurants: [
        {
          value: '1',
          nom: 'Coca'
        },
        {
          value: '2',
          nom: 'Orangina'
        },
        {
          value: '3',
          nom: 'Shweps'
        }
      ]
    };

  },

  handleClick(e){
    e.preventDefault();
    let boisson = this.refs.boisson.getDOMNode().value;
    this.history.pushState(null, `/desserts/${boisson}`);
  },

  render() {
    return (
      <div className="form-group">
        <label >Choississez votre boisson - {this.props.params.id}</label>
          <select ref="boisson" className="form-control">
            <OptionList options={this.state.restaurants} />
          </select>
          <button className="btn btn-primary" onClick={this.handleClick}> Envoyer</button>
      </div>
    )
  }
});

export default Boisson;
