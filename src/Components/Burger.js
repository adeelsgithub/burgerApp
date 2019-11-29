import React from "react";
import classes from "./burger.css";
import BurgerIngredient from "./BurgerIngredient";


const burger = (props) => {

    let transformIngredient = Object.keys(props.ingredient).map((element,i) => {
        return [...Array(props.ingredient[element])].map((c,i)=>{           
          return <BurgerIngredient key={element+i} type={element}/>
        });
    }).reduce((pre,cur)=>{
        return pre.concat(cur);
    } ,[]);
 
    if(transformIngredient.length <= 0){
        transformIngredient = <p>Add Ingredients </p>
    }

    return (
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top" />
            {transformIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger; 

