import React from "react";
import classes from "./Backdrop.css";

let backDrop = (props) =>{
    return (    
        props.showed ? <div className={classes.backDrop} onClick={props.hide}></div> : null

    );
}

export default backDrop;