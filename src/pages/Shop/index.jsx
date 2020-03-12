import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from 'components/CollectionOverview';
import Collection from 'pages/Collection';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={match.path} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    );
};


export default ShopPage;
