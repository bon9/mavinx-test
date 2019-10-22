import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = ({ isAuth }) => (
  <header className={classes.Toolbar}>
    <nav>
      <NavigationItems isAuth={isAuth} />
    </nav>
  </header>
);

export default Toolbar;
