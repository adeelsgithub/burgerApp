import React from "react";
import classes from "./toolBar.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import {Route,Switch} from "react-router-dom";

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
            <Switch>
                <Route path="/" exact render={()=> <h1>Contact-Us</h1>}/>
            </Switch>
            
        </header>
    );

}

export default toolBar;