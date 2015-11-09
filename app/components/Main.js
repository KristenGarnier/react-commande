import React from 'react';
import {RouterHandler} from 'react-router';

class Main extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;