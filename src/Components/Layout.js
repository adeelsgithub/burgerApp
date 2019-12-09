import React from "react";
import ToolBar from "./ToolBar";
import Classes from "./layout.css";
import SideDraw from "./SIdeDraw";

class Layout extends React.Component{
    state={
        showSideDraw: false
    }

    SideDrawCloseHandler =()=>{
        this.setState({showSideDraw : false})
    }

    toggleSideDraw = () =>{
        if(this.state.showSideDraw === false){
            this.setState({showSideDraw : true});
        }
        else{
            this.setState({showSideDraw : false});
        }
    }

    render(){
        return (
            <React.Fragment>
                <ToolBar toggle={this.toggleSideDraw}/>
                <SideDraw toggle={this.toggleSideDraw} sideShowed={this.state.showSideDraw} closed={this.SideDrawCloseHandler} />
                <main className={Classes.content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;