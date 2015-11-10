import React from 'react';
import Button from './Button';

let ItemList = React.createClass({
    handleClick(route){
        console.log(route);
    },
    render(){
        let items = this.props.options.map((item, index) => {
            return (
                    <div className="col-sm-6 col-md-4" key={index}>
                        <div className="thumbnail">
                            <img src={item.image} alt={item.nom} />
                            <div className="caption">
                                <h3>{item.nom}</h3>
                                <p>
                                    <Button route={this.props.route} />
                                </p>
                            </div>
                        </div>
                    </div>
            )
        });
        return(
            <div className="row">
                {items}
            </div>
        )
    }
});

export default ItemList;
