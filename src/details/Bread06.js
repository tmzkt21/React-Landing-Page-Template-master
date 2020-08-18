import React from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {MainHeader, PageTemplate} from "../components";
import '../bread/breads.css'


export const Bread06 = () =>
    <PageTemplate> <section className="Bread01">
        <>

            <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="" className="">
                <div grid-col="4" grid-pad="1.5"><h1>06</h1></div>
                <div grid-col="8" grid-pad="1.5"><h1>Whole Wheat Fermented Bread</h1></div>
                <div grid-col="8" grid-pad="1.5"><h1>통밀발효종빵</h1></div>
            </div>
            <br/>
            <br/><br/>

            <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">
                <div grid-col="x10" grid-pad="1.5">
                    <blockquote><i>견과류와 크랜베리를 가득 넣어 만든 통밀발효조빵<br/>
                        <br/>판매가격	3,900원<br/></i></blockquote>
                    <div grid-col="x10" grid-pad="1.5"> <img src={'https://thebreadblue.com/data/editor/2007/ce5e7872b2037bb54992c26397bf2350_1595417858_7653.png'}/> </div>
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
export default Bread06