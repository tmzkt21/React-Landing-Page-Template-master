import React, {Component, useState} from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About'
import Contact from './components/contact';
import JsonData from './data/data.json';

export const App = () => {

    const [landingPageData,setLandingPageData] = useState({})

    const getlandingPageData = () => {
        setLandingPageData(JsonData)
    }

    const componentDidMount = () => {
        getlandingPageData();
    }
        return (
            <div>
                <Navigation />
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Contact data={landingPageData.Contact} />
            </div>
        )
}

export default App;
