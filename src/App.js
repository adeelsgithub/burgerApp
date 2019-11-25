import React from 'react';
import Layout from "./Components/Layout";
import BurgerBuilder from "./Components/BurgerBuilder";

import './App.css';


class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Layout>
          <p>I am a child on Layout. use me via this.props.childern</p>
          <BurgerBuilder/>          
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
