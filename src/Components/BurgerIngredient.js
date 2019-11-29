import React from "react";
import classes from "./burgerIngredient.css";
import PropTypes from "prop-types";

const burgerIngredient = (props) => {

    let burgerIn = null;

    switch (props.type){
        case "bread-bottom" : 
                burgerIn = <div className={classes.BreadBottom}></div>;
                break;
        case "bread-top":
                burgerIn = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );       
                break;
        case "meat":
                burgerIn = <div className={classes.Meat}></div>
                break;
        case "cheese":
                burgerIn = <div className={classes.Cheese}></div>
                break;  
        case "bacon":
                burgerIn = <div className={classes.Bacon}></div>
                break;      
        case "salad":
                burgerIn = <div className={classes.Salad}></div>
                break;      
        default :
                 burgerIn = null;
                 break;                                      
    }

    return burgerIn;


};

burgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
};


export default burgerIngredient;