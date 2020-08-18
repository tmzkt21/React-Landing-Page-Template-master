import React, {useState} from "react";
import { PageTemplate} from "../home";
import './signin.css'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const SigninTypes= {REQUEST: 'Signin/REQUEST', SUCCESS: 'Signin/SUCCESS', FAIL: 'Signin/FAIL'}
const SigninRequest = action => ({types: SigninTypes.REQUEST, payload: action.payload})
const SigninSuccess = action => ({types: SigninTypes.SUCCESS, payload: action.payload})
const SigninFail = action => ({types: SigninTypes.FAIL, payload: action.payload})

const SigninReducer = (state, action) => {
    switch (action.type) {
        case SigninTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case SigninTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case SigninTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}


export const Signin = () => {
    const [userId,setUserId] = useState('')
    const [password,setPassword] = useState('')

    const history = useHistory();

    const SignInButton = e => {
        e.preventDefault()
        const userData = {
            userId: userId,
            password: password
        }
        axios.post(`http://localhost:8080/user/SignIn`, userData)
            .then(response => {
                    alert("로그인 성공 !")
                    console.log(JSON.stringify(response.data))
                    sessionStorage.setItem("userData", JSON.stringify(response.data))
                    history.push("/")
                }
            ).catch(
            error => {
                alert("로그인 실패 !")
                throw (error)
            }
        )

    }
    return <>
        <PageTemplate> <section className="Signin">

            <div className="h3-bread">&nbsp;</div>
            <form>
                <h3 >Sign In</h3>

                <div className="form-group">
                    <label>UserId</label>
                    <input type="email" className="form-control" onChange={e => setUserId(e.target.value)} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={e=>setPassword(e.target.value)} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={SignInButton}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>



        </section></PageTemplate>
    </>

}

export default SigninReducer