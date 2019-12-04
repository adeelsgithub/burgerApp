import React from "react";
import classes from "./Model.css";
import OrderSummary from "./OrderSummary";


let model = (props) =>{
    return (
        <div className={classes.Modal}>
           <OrderSummary ing={props.ing}/>
        </div>
    );
}

export default model;