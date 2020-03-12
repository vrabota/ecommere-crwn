import React from 'react';

import { useForm } from 'utils/useForm';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
import FormInput from 'components/FormInput';
import Button from 'components/Button';

import './styles.scss';

const SignUpForm = () => {

    const handleSignUp = async () => {
        const { displayName, email, password, confirmPassword } = values;
        if (password !== confirmPassword) {
            alert("passwords don't match");
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
        } catch (e) {
            console.log(e);
        }
    };

    const initialValues = { displayName: '', email: '', password: '', confirmPassword: '' };

    const [values, handleChange, handleSubmit] = useForm(initialValues, handleSignUp);

    return (
        <div className="sign-up">
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    name='displayName'
                    type='displayName'
                    handleChange={handleChange}
                    value={values.displayName}
                    label='Name'
                    required
                />
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
                    handleChange={handleChange}
                    value={values.password}
                    label='Password'
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    handleChange={handleChange}
                    value={values.confirmPassword}
                    label='Confirm Password'
                    required
                />
                <div><Button type='submit'>Sign up</Button></div>
            </form>
        </div>
    );
};

export default SignUpForm;
