import React from 'react';
import Navigation from './Navigation';

class Main extends React.Component {
    render() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default">
                    <Navigation />
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;