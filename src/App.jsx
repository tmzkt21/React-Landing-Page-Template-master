import React, {Component, useState} from 'react'
import Navigation from './home/Navigation';
import Header from './home/Header';
import Features from './home/Features';
import About from './home/About'
import Contact from './home/contact';
import JsonData from './vendor/data.json';

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
                <Header data={JsonData.Header} />
                <Features data={JsonData.Features} />
                <About data={JsonData.About} />
                <Contact data={JsonData.Contact} />
            </div>
        )
}

export default App;
