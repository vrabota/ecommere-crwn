import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from 'assets/crown.svg';
import { auth } from 'firebase/firebase.utils';

import { APP_ROUTES_URL } from '../../constants';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { selectCartHidden } from '../../redux/cart/selectors';
import { selectCurrentUser } from '../../redux/user/selectors';

import './styles.scss';

const Header = ({ user, cartHidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {user ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to={APP_ROUTES_URL.SIGN_IN}>
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            { cartHidden && <CartDropdown /> }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
