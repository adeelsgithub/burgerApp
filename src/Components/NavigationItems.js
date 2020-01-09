import React from "react";
import CLasses from "./navigationItems.css";
import {Link} from "react-router-dom";


let navigationItems = (props) =>{
    return (
        <li className={CLasses.navigation}>
            <Link to={props.link}> {props.item} </Link>  
        </li>

        
    );
    
   

}

export default navigationItems;