import React from "react";
import classes from "./Model.css";
import OrderSummary from "./OrderSummary";

import BackDrop from "./BackDrop";

class Model extends React.Component{
    render(){
        return (
                <React.Fragment>
                    <BackDrop showed={this.props.show} hide={this.props.hide} />
                    <div className={classes.Modal}
                        style={{
                            transform : this.props.show ? "translateY(0)" : "translateY(-100vh)",
                            opacity : this.props.show ? "1":"0"
                        }}
                    >
                    <OrderSummary ing={this.props.ing}
                    hideButtonHandler={this.props.hide}
                    price={this.props.price}
                    />
                    </div>
                </React.Fragment>
                
            
        );
    }
    
}

export default Model;