import React, {Component, useState} from 'react'
import Navigation from './home/Navigation';
import App from './App';
import Features from './home/Features';
import About from './home/About';
import Services from './home/services';
import Gallery from './home/gallery';
import Testimonials from './home/testimonials';
import Team from './home/Team';
import Contact from './home/contact';
import JsonData from './vendor/data.json';
import Main from "./home/Main";

const App_fp = () => {
    const [landingPageData,setLandingPageData] = useState({})
    const getlandingPageData = () => {
        setLandingPageData(JsonData)
    }
    const componentDidMount = () => {
        getlandingPageData();
    }
    return (
        <div>
            <Main />
        </div>
    )
}
export default App_fp;