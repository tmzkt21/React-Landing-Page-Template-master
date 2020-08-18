import React from 'react'

import Home from './home/Home';


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