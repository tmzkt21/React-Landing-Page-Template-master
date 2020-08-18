import React from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {MainHeader, PageTemplate} from "../home";
import '../assets/bread.css'


export const Bread04 = () =>
    <PageTemplate> <section className="Bread01">
        <>

            <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="" className="">
                <div grid-col="4" grid-pad="1.5"><h1>04</h1></div>
                <div grid-col="8" grid-pad="1.5"><h1>Walnut Campagne</h1></div>
                <div grid-col="8" grid-pad="1.5"><h1>호두 깜빠뉴</h1></div>
            </div>
            <br/>
            <br/><br/>

            <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">
                <div grid-col="x10" grid-pad="1.5">
                    <blockquote><i>호두와 마카다미아, 피스타치오를 넣은 고소하고 담백한 호두 깜빠뉴<br/>
                        <br/>판매가격	7,900원<br/></i></blockquote>
                    <div grid-col="x10" grid-pad="1.5"> <img src={'https://thebreadblue.com/data/editor/2007/49edbb0c632492c823d013c985fdb741_1594004329_1354.png'}/> </div>
                    <div grid-col="x10" grid-pad="1.5" className="">{'/images/fig_campagne.jpg'}</div>
                </div>
            </div>
            <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">
                <div grid-col="4" grid-pad="1.5"></div>
                <div grid-col="8" grid-pad="1.5" className=""><a href="breads" rel="next_page">prev ︎</a> &nbsp; &nbsp; &nbsp;&nbsp;
                    <a href="#" rel="next_page">Next ︎</a></div>
            </div>
        </>
    </section></PageTemplate>

export default Bread04