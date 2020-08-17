import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios'
const ModifyingInformation = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory();

    const onUpdateCheck = e => {
        e.preventDefault()
        const userData = {
            userId: userId,
            password: password,
            name: userName,
            phone: phoneNumber,
            email: email
        }
        axios.post(`http://localhost:8080/user/changeInfo/${userId}`,userData)
            .then((res)=>{
                    alert("정보수정완료")
                    history.push("/dashboard")
                }
            ).catch(
            error => {
                alert("정보 수정 실패.. 재시도 바랍니다")
                throw(error)
            })
    }


    const onDeleteCheck = e => {
        e.preventDefault();
        const userData = {
            userId: userId,
            password: password,
            name: userName,
            phone: phoneNumber,
            email: email
        }
        axios.post(`http://localhost:8080/user/delete`,userData)
            .then((res)=>{
                alert("회원탈퇴완료")
                history.push("Signin")
            }
        ).catch(
            error => {
                alert("회원탈퇴 실패 재시도해주세요")
                throw(error)
        })
    }


    return <>
        <div >
           <center><h1>회원정보수정</h1></center>
        <table border="1" style={{ position:'relative',width : '50%', height : '50%',left:'25%',top:'0%'}}>
    <tr bgcolor="white">
        <td align="center" width ="150"> <b>아이디:</b></td>
        <td colspan = "7" ><input type="text" name="my_name" size="20" onChange={e=> setUserId(e.target.value)} /> 4~12자의 영문 대소문자와 숫자로만 입력 </td>
    </tr>
    <tr>
        <td align="center"><b>비밀번호:</b></td>
        <td colspan = "7" ><input type="password" name="my_name" size="20" onChange={e=> setPassword(e.target.value)} /> 4~12자의 영문 대소문자와 숫자로만 입력 </td>
    </tr>
    <tr>
        <td align="center"><b>휴대전화:</b></td>
        <td colspan = "7" ><input type="password" name="my_name" size="20" onChange={e=> setPhoneNumber(e.target.value)} /></td>
    </tr>
    <tr>
        <td align="center"><b>메일주소:</b></td>
        <td colspan = "7" ><input type="text" name="my_name" size="30" onChange={e=> setEmail(e.target.value)} /> 예)id@domain.com </td>
    </tr>
    <tr>
        <td align="center"><b>이름:</b></td>
        <td colspan = "7" ><input type="text" name="my_name" size="20" onChange={e=> setUserName(e.target.value)} /></td>
    </tr>
    </table>
            <div style={{position:'relative',left:'45%'}}>
            <input type="button" value={"회원정보수정"} onClick={onUpdateCheck} />
            <input type="button" value={"회원탈퇴"} onClick={onDeleteCheck}/>
            </div>
        </div>
    </>
}

export default ModifyingInformation