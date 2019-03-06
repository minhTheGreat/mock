import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Link } from 'react-router-dom';

import validate from './RegisterFormValidation';
import TextField from '../elements/TextField';
import Label from '../elements/Label';
import Button from '../elements/Button';

const RegisterForm = ({ handleSubmit, isRegisterFailed }) => (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div class="">
            <Label htmlFor="username">Username</Label>
            <Field component={TextField} isError={isRegisterFailed} name="username" type="text" />

        </div>
        <div class="">
            <Label htmlFor="email">Email</Label>
            <Field component={TextField} isError={isRegisterFailed} name="email" type="email" />

        </div>
        <div class="">
            <Label htmlFor="password">Email</Label>
            <Field component={TextField} isError={isRegisterFailed} name="password" type="password" />

        </div>
        <div>
            <Button>Register</Button>
        </div>
    </form>
)
export default reduxForm({
    form: 'register',
    validate

})(RegisterForm)