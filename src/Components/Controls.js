import React from "react";
import Classes from "./Controls.css"

let BurgerControl = (props) =>{
    return (
    <div className={Classes.BuildControl}>
        <label className={Classes.Label}>{props.types}</label>
        <button className={Classes.More} onClick={props.addButton}>More</button>
        <button className={Classes.Less} onClick={props.deleteButton} disabled={props.disabled}>Less</button>
    </div>
    );
};

export default BurgerControl;