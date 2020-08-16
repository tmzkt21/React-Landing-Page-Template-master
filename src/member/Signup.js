import React, {useState} from "react";
import { PageTemplate} from "../components";
import { useHistory, Link } from 'react-router-dom';
import './signup.css'
import axios from 'axios'
const Signup = () => {
    // const classes = useStyles();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")

    const history = useHistory();



    const onSignCheck = e => {
        e.preventDefault();
        const userData = {
            userId: userId,
            password: password,
            name: userName,
            phone: phoneNumber,
            email: email
        }
        axios.post(`http://localhost:8080/user/register`, userData)
            .then((res) => {
                    alert("회원가입 성공 !")
                    history.push("/Signin")
                }
            ).catch(
            error => {
                alert("회원가입 실패")
                throw (error)
            }
        );
    }

    return <>
        <PageTemplate>
            <section className="signup">
                <div className="main">
                    <div className="h3-bread">&nbsp;</div>
                    <form>
                        <center><h2>회원가입</h2></center>
                        <div className="form-group">
                            <label>아이디</label>
                            <input type="text" className="form-control" onChange={e => setUserId(e.target.value)} placeholder="First name"/>
                        </div>

                        <div className="form-group">
                            <label>비밀번호</label>
                            <input type="text" className="form-control" onChange={e=> setPassword(e.target.value)} placeholder="Last name"/>
                        </div>

                        <div className="form-group">
                            <label>이름</label>
                            <input type="userName" className="form-control" onChange={e => setUserName(e.target.value)} placeholder="Enter name"/>
                        </div>

                        <div className="form-group">
                            <label>휴대전화</label>
                            <input type="password" className="form-control" onChange={e => setPhoneNumber(e.target.value)} placeholder="Enter password"/>
                        </div>

                        <div className="form-group">
                            <label>이메일</label>
                            <input type="password" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" onClick={onSignCheck}>Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">sign in?</a>
                        </p>
                    </form>
                </div>
            </section>
        </PageTemplate>
    </>

}
export default Signup