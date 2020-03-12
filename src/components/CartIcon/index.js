import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import { toggleCartHidden } from '../../redux/cart/actions';
import { selectTotalItems } from '../../redux/cart/selectors';

import './styles.scss';

const CartIcon = ({ toggleCartHidden, totalItems }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{totalItems}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    totalItems: selectTotalItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
