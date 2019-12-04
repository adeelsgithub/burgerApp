import React from "react";
import BurgerControl from "./Controls";
import classes from "./BuildControls.css";

let controlArray = [
    {label : "Salad" , type : "salad"},
    {label : "Bacon" , type : "bacon"},
    {label : "Cheese" , type : "cheese"},
    {label : "Meat" , type : "meat"}
];



let burgerControl = (props) =>{
   return ( 
        <div className={classes.BuidlControl}>
            <p><strong>Current Price : {props.price.toFixed(2)}</strong></p>
            {controlArray.map((element) =>(
                <BurgerControl key={element.label} 
                label={element.label} 
                types={element.type} 
                addButton={() => props.addHandler(element.type)}
                deleteButton= {()=> props.deleteHandler(element.type)}
                disabled={props.disabled[element.type]}
                />
            ))}
            <button className={classes.OrderButton}
            disabled={!props.purchasable}
            >ORDER NOW</button>
        </div>
        
   
   );
   
};

export default burgerControl;