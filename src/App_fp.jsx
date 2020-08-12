import React, {Component, useState} from 'react'
import Navigation from './components/Navigation';
import App from './App';
import Features from './components/Features';
import About from './components/About';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Main from "./components/Main";

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