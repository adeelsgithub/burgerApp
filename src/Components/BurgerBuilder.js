import React from "react";
import Burger from "./Burger";
import BurgerControls from "./BurgerControls";

class BurgerBuilder extends React.Component{
    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese :0,
            meat : 0
        }
    };
    render(){
        return (
            <React.Fragment>
                <Burger ingredient={this.state.ingredients}/>
                <BurgerControls />
            </React.Fragment>
            
        );
    }
}

export default BurgerBuilder;