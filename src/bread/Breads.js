import React from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import '../assets/bread.css'
import Navigation from "../home/Navigation";
//import Bread01 from "../details/Bread01";

const BreadsTypes= {REQUEST: 'Signin/REQUEST', SUCCESS: 'Signin/SUCCESS', FAIL: 'Signin/FAIL'}
const BreadsRequest = action => ({types: BreadsTypes.REQUEST, payload: action.payload})
const BreadsSuccess = action => ({types: BreadsTypes.SUCCESS, payload: action.payload})
const BreadsFail = action => ({types: BreadsTypes.FAIL, payload: action.payload})

const BreadsReducer = (state, action) => {
    switch (action.type) {
        case BreadsTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case BreadsTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case BreadsTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}

export const Breads = () =>
    <div>
        <Navigation />
        
        <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">

            <div grid-col="4" grid-pad="1.5" className="bread-title"><h1>B r e a d</h1><br/>

                    <blockquote><i>No eggs, No milk, and No butter.</i><br/>The Bread Blue<br/>using all-natural
                        ingredients only.</blockquote>

                <br/>
                    <blockquote>The Bread Blue is for everyone;<br/>Locals, Visitors, and those who are Vegan
                    </blockquote>
                </div>

            <div grid-col="8" grid-pad="1.5" className="">
                <div className="image-gallery" gid="6">
                    <a rel="history" href="Bread01" className="image-link">
                        <img src={'/images/fig_campagne.jpg'} width="344" height="441.6" alt=""/></a>
                    <a rel="history" href="Bread02" className="image-link">
                        <img src={'/images/morning_bread.jpg' } width="344" height="441.6" alt=""/></a>
                    <a rel="history" href="Bread03" className="image-link">
                        <img src={'/images/sweet_pumpkin_bread.jpg'} width="344" height="441.6" alt=""/></a>
                    <a rel="history" href="Bread04" className="image-link">
                        <img src={'/images/walnut_campagne.jpg'} width="344" height="441.6" alt=""/></a>
                    <a rel="history" href="Bread05" className="image-link">
                            <img src={'/images/whole_wheat_ bread.jpg'} width="344" height="441.6" alt=""/></a>
                    <a rel="history" href="Bread06" className="image-link">
                            <img src={'/images/whole_wheat_fermented_bread.jpg'} width="344" height="441.6" alt=""/></a>
                    {/*<a rel="history" href="Vessel-07" className="image-link">{image 10 caption="Vessel 07"}</a>*/}
                    {/*<a rel="history" href="Vessel-08" className="image-link">{image 11 caption="Vessel 08"}</a>*/}
                    {/*<a rel="history" href="Vessel-09" className="image-link">{image 13 caption="Vessel 09"}</a>*/}
                    {/*<a rel="history" href="Vessel-10" className="image-link">{image 19 caption="Vessel 10"}</a>*/}
                    {/*<a rel="history" href="Vessel-11" className="image-link">{image 21 caption="Vessel 11"}</a>*/}
                    {/*<a rel="history" href="Vessel-12" className="image-link">{image 20 caption="Vessel 12"}</a>*/}

                </div>
                <br/><br/><a href="Page-Index" rel="history">︎ Index</a></div>
        </div>
    </div>

export default BreadsReducer










