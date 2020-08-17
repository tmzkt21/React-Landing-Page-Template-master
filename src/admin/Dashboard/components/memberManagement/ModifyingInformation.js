import React from "react";

const ModifyingInformation = () => {
    return <>
        <div >
           <center><h1>회원정보수정</h1></center>
        <table border="1" style={{ position:'relative',width : '50%', height : '50%',left:'25%',top:'0%'}}>
    <tr bgcolor="white">
        <td align="center" width ="150"> <b>아이디:</b></td>
        <td colspan = "7" ><input type="text" name="my_name" size="20" /> 4~12자의 영문 대소문자와 숫자로만 입력 </td>
    </tr>
    <tr>
        <td align="center"><b>비밀번호:</b></td>
        <td colspan = "7" ><input type="password" name="my_name" size="20" /> 4~12자의 영문 대소문자와 숫자로만 입력 </td>
    </tr>
    <tr>
        <td align="center"><b>비밀번호확인:</b></td>
        <td colspan = "7" ><input type="password" name="my_name" size="20" /></td>
    </tr>
    <tr>
        <td align="center"><b>메일주소:</b></td>
        <td colspan = "7" ><input type="text" name="my_name" size="30" /> 예)id@domain.com </td>
    </tr>
    <tr>
        <td align="center"><b>이름:</b></td>
        <td colspan = "7" ><input type="text" name="my_name" size="20" /></td>
    </tr>
    </table>
            <div style={{position:'relative',left:'45%'}}>
            <input type="button" value={"회원정보수정"}/>
            <input type="button" value={"회원탈퇴"}/>
            </div>
        </div>
    </>
}

export default ModifyingInformation