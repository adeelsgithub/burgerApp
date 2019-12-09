import React from 'react';
import Layout from "./Components/Layout";
import BurgerBuilder from "./Components/BurgerBuilder";

import './App.css';


class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Layout>
          <BurgerBuilder/>          
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
