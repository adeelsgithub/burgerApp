  import React from "react";
  import BurgerLogo from "../Assets/images/logo.png"
  import Classes from "./logo.css";

  let logo = (props) => {
      return (
          <div className={Classes.logo}>
              <img src={BurgerLogo} alt="Burger Logo" />
          </div>
      );
  }

  export default logo;