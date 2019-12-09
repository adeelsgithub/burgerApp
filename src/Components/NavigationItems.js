import React from "react";
import CLasses from "./navigationItems.css";

let navigationItems = (props) =>{
    return (
        <li className={CLasses.navigation}>
            <a href={props.link}>{props.item}</a>
        </li>
    );
}

export default navigationItems;