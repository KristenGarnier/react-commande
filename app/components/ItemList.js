import React from 'react';
import Button from './Button';

let ItemList = React.createClass({
    render(){
        let items = this.props.options.map((item, index) => {
            return (
                    <div className="col-sm-6 col-md-3" key={index}>
                        <div className="thumbnail">
                            <img src={item.image} alt={item.nom} />
                            <div className="caption">
                                <h3>{item.nom}</h3>
                                <p>
                                    <Button item={item} click={this.props.click} />
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
