import React, { Component } from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import Services from './services';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
import {Breads} from "../bread/Breads";
import {Features} from "./Features";
import {About} from './About';
import {App} from '../App';
import {Search} from "../category/Search";
import {Signin} from "../user/Signin";
import {Signup} from "../user";
import {AboutDetail} from "./AboutDetail";
import Bread01 from "../bread/Bread01";
import Order from "../breadOrder/Order";
import {MyPage} from "../user/MyPage";
import Admin from "../admin/Routes";
import theme from "../vendor/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {Map} from '../vendor/map/index'
import RouteWithLayout from "../admin/RouteWithLayout";
import  MainLayout from "../admin/AdminMain";
import {Shipping} from "../shipping/Shipping";
import {Chart} from "../chart/Chart";
import ContactDetail from "./ContactDetail";
import Contacts from "../vendor/Contacts";
import Pages from "../vendor-test/Pages";

import { createStore } from 'redux'
import rootReducer from '../RootReducer'
import LoginForm from "../user/LoginForm";
import {MemberManagement} from "../admin/MemberManagement";
import {ProductRegistration} from "../admin/ProductRegistration";



const Main = () => {
    return <>
        <Provider store = {createStore(rootReducer)}>
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
                    <Route path="/signup" component={Signup}/>
                    <Route path="/aboutDetail" component={AboutDetail}/>
                    <Route path="/bread01" component={Bread01}/>
                    <Route path="/Order" component={Order}/>
                    <Route path="/MyPage" component={MyPage}/>
                    <Route path="/ContactDetail" component={ContactDetail}/>
                    <Route path="/Contacts" component={Contacts}/>
                    <Route path="/Pages" component={Pages}/>
                    <Route path="/LoginForm" component={LoginForm}/>
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
        </Provider>
    </>


}

export default Main
