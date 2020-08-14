import React, { Component } from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Services from './services';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
//import $ from 'jquery';
import {Breads} from "../bread/Breads";
import {Features} from "./Features";
import {About} from './About';
import {App} from '../App';
import Search from "../search/Search";
import Signin from "../member/Signin";
import {SignUp} from "../member";
import {AboutDetail} from "./AboutDetail";
import Bread01 from "../details/Bread01";
import Order from "../order/Order";
import MyPage from "../mypage/MyPage";
import Admin from "../admin/Routes";
import theme from "../admin/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {Map} from '../admin/Dashboard/components/map/index'
import RouteWithLayout from "../admin/RouteWithLayout";
import Dashboard from "../admin/Dashboard";
import {Main as MainLayout} from "../admin/layouts";
import {MemberManagement} from "../admin/Dashboard/components/memberManagement";
import {Shipping} from "../admin/Dashboard/components/shipping";
import {Chart} from "../admin/Dashboard/components/chart";
import {ProductRegistration} from "../admin/Dashboard/components/productRegistration";
import ContactDetail from "./ContactDetail";
import ContactMap from "../contactMap/ContactMap";
import Pages from "../pagination/Pages";


const Main = () => {
    return <div>
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {App}/>
                    <Route path="/features" component = {Features} />
                    <Route path="/about" component ={About} />
                    <Route path="/services" component = {Services} />
                    <Route path="/testimonials" component = {Testimonials}/>
                    <Route path="/team" component = {Team}/>
                    <Route path="/contact" component = {Contact}/>
                    <Route path="/breads" component = {Breads} />
                    <Route path="/search" component={Search}/>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/aboutDetail" component={AboutDetail}/>
                    <Route path="/bread01" component={Bread01}/>
                    <Route path="/Order" component={Order}/>
                    <Route path="/MyPage" component={MyPage}/>
                    <Route path="/ContactDetail" component={ContactDetail}/>
                    <Route path="/ContactMap" component={ContactMap}/>
                    <Route path="/Pages" component={Pages}/>
                    <Redirect from="/message" to="/" /> {/* 주소/message 로 접속 시 주소/posts 로 리디렉션 */}



                    <ThemeProvider theme={theme}>
                        <Route path="/dashboard" component={Admin}/>
                        <Switch>
                            <RouteWithLayout
                                component={Map}
                                exact
                                layout={MainLayout}
                                path="/map"
                            />
                            <RouteWithLayout
                                component={MemberManagement}
                                exact
                                layout={MainLayout}
                                path="/memberManagement"
                            />
                            <RouteWithLayout
                                component={Shipping}
                                exact
                                layout={MainLayout}
                                path="/shipping"
                            />
                            <RouteWithLayout
                                component={Chart}
                                exact
                                layout={MainLayout}
                                path="/chart"
                            />
                            <RouteWithLayout
                                component={ProductRegistration}
                                exact
                                layout={MainLayout}
                                path="/productRegistration"
                            />
                        </Switch>
                    </ThemeProvider>
                </Switch>
        </BrowserRouter>
    </div>


}

export default Main
