import React from "react";
import Burger from "./Burger";
import BurgerControls from "./BurgerControls";
import Model from "./Model";



let ItemPrices = {
    salad : 0.5,
    bacon : 0.6,
    cheese : 0.7,
    meat : 1
}


class BurgerBuilder extends React.Component{
    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese :0,
            meat : 0
        },
        price : 2,
        purchasable : false
    };

    purchasable(ingredient){
        let sum = Object.keys(ingredient).map((key) =>{
            return ingredient[key];
        }).reduce((sum,el) =>{
            return sum+el;
        },0)
        this.setState({ purchasable : (sum > 0) });

    }

    addHandler = (types) =>{
        // item counter
        let oldCount = this.state.ingredients[types];
        let newCount = oldCount + 1;
        let updateCount = { ...this.state.ingredients }
        updateCount[types] = newCount;
        // price Update
        let oldPrice = this.state.price;
        let newPrice = ItemPrices[types] + oldPrice;
        // updating state
        this.setState({ingredients : updateCount , price : newPrice});
        // calling Purchasable Method
        this.purchasable(updateCount);
    }


    deleteHandler = (types) =>{
        // item counter
        if(this.state.ingredients[types] > 0){
        let oldCount = this.state.ingredients[types];
        let deleteCount = oldCount - 1;
        let updateCount = { ...this.state.ingredients }
        updateCount[types] = deleteCount;
        // price Update
        let oldPrice = this.state.price;
        let deletePrice =  oldPrice - ItemPrices[types] ;
        // updating state
        this.setState({ingredients : updateCount , price : deletePrice});
        // calling Purchasable Method
        this.purchasable(updateCount);
    }}

    render(){
        let disabledInfo = {...this.state.ingredients};
        
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
       

        return (
            <React.Fragment>
                <Model  ing={this.state.ingredients} />
                <Burger ingredient={this.state.ingredients}/>
                <BurgerControls  addHandler={this.addHandler}
                deleteHandler={this.deleteHandler}
                disabled = {disabledInfo}
                price= {this.state.price}
                purchasable={this.state.purchasable}
                />
            </React.Fragment>
            
        );
    }
}

export default BurgerBuilder;