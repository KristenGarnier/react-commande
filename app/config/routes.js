import React from 'react';
import Main from '../components/Main';
import Restaurant from '../components/Restaurant';
import Produit from '../components/Produit';

import { Router, IndexRoute, Route } from 'react-router';

export default (
    <Route name="app" path="/" component={Main}>
        <Route name="produits" path="produits/:id" component={Produit} />
        <IndexRoute component={Restaurant} />
        <Route path="*" component={Restaurant}/>
    </Route>
);
