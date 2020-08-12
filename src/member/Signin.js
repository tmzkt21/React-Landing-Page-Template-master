import React from "react";
import { PageTemplate} from "../components";
import './signin.css'

const signinTypes= {REQUEST: 'signin/REQUEST', SUCCESS: 'success/REQUEST', FAIL: 'signin/FAIL'}
const signinRequest = action => ({types: signinTypes.REQUEST, payload: action.payload})
const signinSuccess = action => ({types: signinTypes.SUCCESS, payload: action.payload})
const signinFail = action => ({types: signinTypes.FAIL, payload: action.payload})

const signinReducer = (state, action) =>{
    switch (action.type) {
        case signinTypes.REQUEST:
            return{
                ...state,payload: action.payload
            }
        default: return state
    }
}

const Signin = () => <PageTemplate> <section className="signin">

<div className="h3-bread">&nbsp;</div>
    <form>
    <h3 >Sign In</h3>

    <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="Enter password" />
    </div>

    <div className="form-group">
    <div className="custom-control custom-checkbox">
    <input type="checkbox" className="custom-control-input" id="customCheck1" />
    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
    </div>
    </div>

    <button type="submit" className="btn btn-primary btn-block">Submit</button>
    <p className="forgot-password text-right">
    Forgot <a href="#">password?</a>
    </p>
    </form>



</section></PageTemplate>

export default Signin