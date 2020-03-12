import { createSelector } from 'reselect';

const selectCart = state => state.cart;
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
export const selectTotalItems = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((quantityAcc, cartItem) => quantityAcc + cartItem.quantity , 0)
);
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((quantityAcc, cartItem) => quantityAcc + cartItem.quantity * cartItem.price , 0)
);
