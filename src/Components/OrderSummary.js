import React from "react";



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
            <p>Continue to Check out ?</p>
        </div>
    );
    
}

export default orderSummary;