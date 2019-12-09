import React from "react";
import Classes from "./sideDraw.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import BackDrop from "./BackDrop";

class SideDraw extends React.Component{
   render(){
       let sideBar = [Classes.sideDraw , Classes.close];
       if(this.props.sideShowed){
           sideBar= [Classes.sideDraw,Classes.open]
       }
    return (
        <React.Fragment>
            <BackDrop showed={this.props.sideShowed} hide={this.props.closed}/>
            <div className={sideBar.join(" ")}>  
            <div style={{height : "10%" , textAlign:"center"}}>
            <Logo />
            </div>
            <nav>
                <Navigation />
            </nav>
            </div>
        </React.Fragment>
        
        
    );

   }
    
};

export default SideDraw;