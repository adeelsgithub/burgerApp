import React from "react";
import classes from "./Button.css"


let orderSummary =(props)=>{  

    let li = Object.keys(props.ing).map((ingKey) =>{
        return <li key={ingKey}> {ingKey} : {props.ing[ingKey]} </li>
    });
    
    return (
        <div>
            <h1>Your Order</h1>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {li}
            </ul>
            <p><strong> TOTAL PRICE : {props.price.toFixed(2)}</strong></p>
            <p>Continue to Check out ?</p>
            <button className={classes.Button +" "+ classes.Danger} onClick={props.hideButtonHandler}>CANCEL</button>
            <button className={classes.Button +" "+ classes.Success} onClick={props.hideButtonHandler}>CONTINUE</button>
        </div>
    );
    
}

export default orderSummary;