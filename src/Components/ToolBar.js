import React from "react";
import classes from "./toolBar.css";
import Logo from "./Logo";
import Navigation from "./Navigation";

let toolBar = (props) =>{
    return (
        <header className={classes.toolBar}>
            <div className={classes.DrawerToggle} onClick={props.toggle} >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo />
            <nav className={classes.desktopOnly}>
                <Navigation />               
            </nav>
          
        </header>
    );
}

export default toolBar;