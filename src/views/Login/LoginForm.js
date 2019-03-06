import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import validate from './LoginFormValidation';
import TextField from '../elements/TextField';
import Label from '../elements/Label';
import Button from '../elements/Button';

const LoginForm =({handleSubmit,isLoginFailed})=>(
    <form onSubmit={(e)=> handleSubmit(e)}>
        <div className="">
            <Label htmlFor="username">
                username
            </Label>
            <Field component={TextField} isError={isLoginFailed} name="username" type="text"/>
           </div>
            <div className="">
            <Label htmlFor="password">
                Password
            </Label>
            <Field component={TextField} isError={isLoginFailed} name="password" type="password"/>
            </div>
            <div className="">
                <Button>Login</Button>
            </div>
            <div className="">
                Don't have an account ?
                <Link to="/register">
                    Register
                </Link>
            </div>
    
    </form>


)
export default reduxForm({
    form:'login',
    validate,

})(LoginForm)