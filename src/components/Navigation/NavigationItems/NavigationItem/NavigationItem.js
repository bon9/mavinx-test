import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const navigationItem = ({ link, exact, children, handleClick }) => (
  <li className={classes.NavigationItem} onClick={handleClick}>
    <NavLink to={link} exact={exact} activeClassName={classes.active}>
      {children}
    </NavLink>
  </li>
);

export default navigationItem;
