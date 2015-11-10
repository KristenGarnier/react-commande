import React from 'react';
import Main from '../components/Main';
import Restaurant from '../components/Restaurant';
import Produit from '../components/Produit';
import Boisson from '../components/Boisson';
import Dessert from '../components/Dessert';
import Panier from '../components/Panier';

import { Router, IndexRoute, Route } from 'react-router';

export default (
    <Route name="app" path="/" component={Main}>
        <Route name="desserts" path="/desserts" component={Dessert} />
        <Route name="boissons" path="/boissons" component={Boisson} />
        <Route name="produits" path="/produits" component={Produit} />
        <Route name="panier" path="/panier" component={Panier} />
        <IndexRoute component={Restaurant} />
        <Route path="*" component={Restaurant}/>
    </Route>
);
