import React from "react";
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Navigation from "./Navigation";

const selectedStyle = {
    backgroundColor: "white", color: "grey"
}

const MainMenu = () => <nav className={"main-menu"}>
    <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="" className="">
        <div grid-col="4" grid-pad="1.5"></div>
        <div grid-col="8" grid-pad="1.5" className="">
    <NavLink to={"/"}><FaHome/>home</NavLink>&nbsp;
    <NavLink to={"/about"} activeStyle={selectedStyle}>about</NavLink>&nbsp;
    <NavLink to={"/breads"} activeStyle={selectedStyle}>breads</NavLink>&nbsp;
            <Navigation to={"/search"} activeStyle={selectedStyle}>search</Navigation>&nbsp;
    <NavLink to={"/signin"} activeStyle={selectedStyle}>login</NavLink>&nbsp;
    <NavLink to={"/signup"} activeStyle={selectedStyle}>join</NavLink>
        </div>
    </div>
</nav>

export default MainMenu