import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = ({ isReg, isLogOn }) => {
  let navigationItemList = (
    <NavigationItem link="/registatrion">Registration</NavigationItem>
  );

  if (isReg) {
    navigationItemList = (
      <>
        <NavigationItem link="/login">Login</NavigationItem>
        <NavigationItem link="/registatrion">Registatrion</NavigationItem>
      </>
    );
  }

  if (isLogOn) {
    navigationItemList = (
      <>
        <NavigationItem link="/" exact>
          Main
        </NavigationItem>
        <NavigationItem link="/personal">Personal</NavigationItem>
        <NavigationItem link="/logout">Logout</NavigationItem>
      </>
    );
  }
  return (
    <ul className={classes.NavigationItems}>
      <nav>{navigationItemList}</nav>
    </ul>
  );
};

export default navigationItems;
