import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from 'components/CollectionItem';

import { selectCollectionById } from '../../redux/shop/selectors';

import './styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        collection: selectCollectionById(ownProps.match.params.collectionId)(state),
    }
};

export default connect(mapStateToProps)(CollectionPage);
