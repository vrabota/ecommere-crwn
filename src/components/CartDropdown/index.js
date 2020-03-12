import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

import Button from '../Button';
import CartItem from '../CartItem';
import { selectCartItems } from '../../redux/cart/selectors';
import { toggleCartHidden } from '../../redux/cart/actions';

import './styles.scss';

const CartDropdown = ({ cartItems }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onCheckoutClick = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    };
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button onClick={onCheckoutClick}>GO TO CHECKOUT</Button>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
