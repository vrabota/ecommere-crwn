import React from 'react';

import FormInput from 'components/FormInput';
import Button from 'components/Button';
import { useForm } from 'utils/useForm';

import { authWithGoogle, auth } from 'firebase/firebase.utils';

import './styles.scss';

const SignInForm = () => {
    const handleSignIn = async () => {
        const { email, password } = values;
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (e) {
            console.log(e);
        }
    };

    const [values, handleChange, handleSubmit] = useForm({ email: '', password: '' }, handleSignIn);

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={values.email}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={values.password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <div className="sign-in-footer">
                    <Button type='submit'>Sign in</Button>
                    <Button onClick={authWithGoogle}>Sign in with Google</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
