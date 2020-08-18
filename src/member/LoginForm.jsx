import React from 'react';
import Joi from 'joi-browser';
import Form from './Form';

// Form 컴포넌트 상속
export default class LoginForm extends Form {
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton("Login")}
                </form>
            </div>
        )
    }
}