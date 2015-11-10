import React from 'react';

let Router = require('react-router');

let Button = React.createClass({
    mixins: [Router.History],
    handleTo(){
        this.history.pushState(null, this.props.route);
    },
    render(){
        return(
            <button className="btn btn-primary" onClick={this.handleTo}>Choisir</button>
        )
    }
});

export default Button;
