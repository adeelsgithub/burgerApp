import React from "react";

class Layout extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div>logo , navebar</div>
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;