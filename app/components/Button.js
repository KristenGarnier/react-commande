import React from 'react';



let Button = React.createClass({
    handleTo(){
        this.props.click(this.props.item);
    },
    render(){
        return(
            <button className="btn btn-primary" onClick={this.handleTo}>Choisir</button>
        )
    }
});

export default Button;
