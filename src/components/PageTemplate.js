import React from "react";
import MainMenu from "./MainMenu";
const PageTemplate = ({children}) => <div className={"page"}>
    <MainMenu/>
    {children}
</div>
export default PageTemplate