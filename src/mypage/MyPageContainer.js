import React, { useState, useEffect } from "react";

export default ({history}) => {
    // tab
    const [tab, setTab] = useState("cart");
    const clickTab = (tabString) => {
        setTab(tabString);
    }
}