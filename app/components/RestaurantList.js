import React from 'react';

class RestaurantList extends React.Component{
  render(){
    var restaurants = this.props.restaurants.map((restau, index) => {
      console.log(restau);
      return <option value={restau.value}  key={index}>{restau.nom}</option>;
    });

    return(
      <span>
        {restaurants}
      </span>
    )
  }
}

export default RestaurantList;
