import React from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {MainHeader, PageTemplate} from "../components";
import '../bread/breads.css'


export const Bread05 = () =>
    <PageTemplate> <section className="Bread01">
        <>

            <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="" className="">
                <div grid-col="4" grid-pad="1.5"><h1>05</h1></div>
                <div grid-col="8" grid-pad="1.5"><h1>Whole Wheat Bread</h1></div>
                <div grid-col="8" grid-pad="1.5"><h1>순수 통밀식빵</h1></div>
            </div>
            <br/>
            <br/><br/>

            <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">
                <div grid-col="x10" grid-pad="1.5">
                    <blockquote><i>100% 통밀로 만든 고소하고 담백한 통밀식빵<br/>
                        <br/>판매가격	6,900원<br/></i></blockquote>
                    <div grid-col="x10" grid-pad="1.5"> <img src={'https://thebreadblue.com/data/editor/2007/ce5e7872b2037bb54992c26397bf2350_1595496643_9682.png'}/> </div>
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
export default Bread05