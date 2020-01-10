import React from "react";
import CLasses from "./navigationItems.css";
import {NavLink} from "react-router-dom";


let navigationItems = (props) =>{
    return (
        <li className={CLasses.navigation}>
            <NavLink to={props.link}> {props.item} </NavLink>  
        </li>

        
    );
    
   

}

export default navigationItems;