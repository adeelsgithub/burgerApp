import React from "react";
import Classes from "./Controls.css"

let BurgerControl = (props) =>{
    return (
    <div className={Classes.BuildControl}>
        <label className={Classes.Label}>{props.types}</label>
        <button className={Classes.More}>More</button>
        <button className={Classes.Less}>Less</button>
    </div>
    );
};

export default BurgerControl;