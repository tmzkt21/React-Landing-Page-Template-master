import React from "react";
import {PageTemplate} from "../components";
import styled from "styled-components";
import './MypageContainer'



const MyNavDiv = styled.div`
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 0 0; 
    border-bottom: 1px solid #ccc;
    button {
        border: 1px solid transparent; 
        border-bottom: 0; 
        cursor: pointer; 
        font-weight: 600;
        background-color: transparent;
        font-size: 18px;
        outline: none;
        padding: 15px;
        @media (max-width: 600px) {
            padding: 10px;
        }
        :hover {
            color: black;
        }
    }
`;


function clickTab(cart) {
    return undefined;
}

let tab;


const Mypage = () => <PageTemplate> <section className="signup">
    <h1 className="h3-bread"> </h1>
    <div className="gaukuF"><h2 className="sc-jTzLTM btRZwy">My Page</h2>
        <button type="button" className="sc-dnqmqq qrXFy">LogOut</button>
    </div>


    <MyNavDiv>
        <button onClick={() => clickTab("cart")}
                style={tab === "cart" ?
                    { borderColor: "#ccc", borderBottom: "1px solid #fff", marginBottom: "-1px" } :
                    { borderColor: "transparent" }} >
            Cart
        </button>
        <button onClick={() => clickTab("buyList")}
                style={tab === "buyList" ?
                    { borderColor: "#ccc", borderBottom: "1px solid #fff", marginBottom: "-1px" } :
                    { borderColor: "transparent" }} >
            buyList
        </button>
        <button onClick={() => clickTab("editProfile")}
                style={tab === "editProfile" ?
                    { borderColor: "#ccc", borderBottom: "1px solid #fff", marginBottom: "-1px" } :
                    { borderColor: "transparent" }} >
            editProfile
        </button>
    </MyNavDiv>











    <div className="iyyyjc">
        <button>buyList</button>
        <button>editProfile</button>
    </div>






    <article className="form">
        <article className="form">
            <form className="form"><input placeholder="Name" required="" type="text" className="fbFaMk" value="게스트"/><input
                placeholder="Email" required="" type="email" className="fbFaMk" value="guest@guest.com"/><input
                placeholder="Password" type="password" className="fbFaMk" value=""/><input
                placeholder="Confirm Password" type="password" className="sc-fMiknA fbFaMk" value=""/>
                <div className="sc-dVhcbM jBgDQs"><input placeholder="Zip Code" required="" type="text"
                                                         id="zipCodeInput" className="sc-fMiknA fbFaMk" value="06001"/>
                    <button type="button" id="zipCodeBtn" className="qrXFy">Find</button></div>
                <input placeholder="Address" required="" type="text" className="sc-fMiknA fbFaMk"
                       value=""/><input placeholder="Address Detail" required="" type="text"
                                                              className="sc-fMiknA fbFaMk" value="주소"/>

                    <div className="sc-fAjcbJ hGXRsB"><select id="phone1" className="sc-eqIVtm jMFUXs">
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="017">017</option>
                        <option value="019">019</option>
                    </select><input required="" type="text" id="phone2" className="sc-fMiknA fbFaMk" value="1234"/><input
                        required="" type="text" id="phone3" className="sc-fMiknA fbFaMk" value="1234"/></div>
                    <button type="submit" id="createAccountBtn" className="sc-dnqmqq qrXFy">Edit Profile</button></form>
        </article>
    </article>

<center>
    <article className="bCmhqn">
        <table className="sc-fYxtnH hiHOMI">
            <thead className="fztrmO">
            <tr>
                <th scope="col" className="ftsUDw">num</th>
                <th scope="col" className="ftsUDw">Name(option)</th>
                <th scope="col" className="ftsUDw">Price</th>
                <th scope="col" className="ftsUDw">Quantity</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>
        <div className="sc-ktHwxA kgPOXe">
            <div aria-label="Pagination Navigation" role="navigation" className="ui pagination menu"><a
                aria-current="false" aria-disabled="false" tabIndex="0" value="1" aria-label="Previous item"
                type="prevItem" className="item">⟨</a><a aria-current="false" aria-disabled="false" tabIndex="0"
                                                         value="0" aria-label="Next item" type="nextItem"
                                                         className="item">⟩</a></div>
        </div>
    </article>
</center>
</section></PageTemplate>
export default Mypage