import React from 'react';
import ItemList from './ItemList';


let Dessert = React.createClass({
    getInitialState(){

        return this.state = {
            desserts: [
                {
                    id: '1',
                    nom: 'Tarte à la fraise',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Imagemagick-logo.png'
                },
                {
                    id: '2',
                    nom: 'Gateau au chocolat',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Imagemagick-logo.png'
                },
                {
                    id: '3',
                    nom: 'Pêche melba',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Imagemagick-logo.png'
                }
            ]
        };

    },
    render() {
        return (
            <div>
                <h2 >Choisissez votre Dessert</h2>
                <ItemList options={this.state.desserts} route="/"/>
            </div>
        )
    }
});

export default Dessert;
