import React from "react";
import Classes from "./navigation.css";
import NavigationItems from "./NavigationItems";

let navigation = () =>{
    return (
        <ul className={Classes.navigationUl}>
            <NavigationItems link="\" item="Burger Builder"/>
            <NavigationItems link="\" item="Contact Us"/>         
        </ul>
    );
}

export default navigation;