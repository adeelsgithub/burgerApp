import React from 'react';
import Layout from "./Components/Layout";
import BurgerBuilder from "./Components/BurgerBuilder";
import {BrowserRouter} from "react-router-dom";

import './App.css';


class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <BrowserRouter>
          <Layout>
            <BurgerBuilder/>          
          </Layout>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
