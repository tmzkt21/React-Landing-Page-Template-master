import React from "react";
import {PageTemplate} from "../components";
import styled from "styled-components";
import "./MyPageConainer";
import Route from "react-router-dom/es/Route";
import OrderDetail from "./OrderDetail";
import {Link} from "react-router-dom"
import Navigation from "../components/Navigation";
import EditProfile from "./EditProfile";



const MyNavDiv = styled.div`
    
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

const MyPage = () => <PageTemplate> <section className="signin">

    <h1 className="h3-bread"> </h1>
    <div className="gaukuF"><h2 className="sc-jTzLTM btRZwy">My Page</h2>
        <button type="button" className="sc-dnqmqq qrXFy">LogOut</button>
    </div>

    <MyNavDiv>
    <p><Link to="/MyPage/OrderDetail">OrderList</Link></p>
    <p><Link to="/MyPage/EditProfile">Edit Profile</Link></p>
    </MyNavDiv>

    {/* 이중 라우팅 */}
    <Route path="/MyPage/OrderDetail" component={OrderDetail}/>
    <Route path="/MyPage/EditProfile" component={EditProfile} />






</section></PageTemplate>

export default MyPage





