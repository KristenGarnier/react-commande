import React from 'react';
import Main from '../components/Main';
import Restaurant from '../components/Restaurant';
import Produit from '../components/Produit';
import Boisson from '../components/Boisson';
import Dessert from '../components/Dessert';

import { Router, IndexRoute, Route } from 'react-router';

export default (
    <Route name="app" path="/" component={Main}>
        <Route name="desserts" path="desserts/:id" component={Dessert} />
        <Route name="boissons" path="boissons/:id" component={Boisson} />
        <Route name="produits" path="produits/:id" component={Produit} />
        <IndexRoute component={Restaurant} />
        <Route path="*" component={Restaurant}/>
    </Route>
);
