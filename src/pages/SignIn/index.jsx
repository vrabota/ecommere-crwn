import React from 'react';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

import './styles.scss';

const SignInPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default SignInPage;
