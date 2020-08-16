import React, {useState} from "react";
import { PageTemplate} from "../components";
import './signin.css'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';


const Signin = () => {
    const [userId,setUserId] = useState('')
    const [password,setPassword] = useState('')

    const history = useHistory();

    const SignInButton = e => {
        e.preventDefault()
        const userData = {
            userId: userId,
            password: password
        }
        axios.post(`http://localhost:8080/user/signIn`, userData)
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
        <PageTemplate> <section className="signin">

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

export default Signin