import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = ({ isReg, isLogOn }) => (
  <header className={classes.Toolbar}>
    <nav>
      <NavigationItems isLogOn={isLogOn} isReg={isReg} />
    </nav>
  </header>
);

export default Toolbar;
