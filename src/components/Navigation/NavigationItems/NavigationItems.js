import React, { useState } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import UserMenu from "./../../UserMenu/UserMenu";

const NavigationItems = ({ isAuth }) => {
  const [showBtn, setShowBtn] = useState(false);

  const handleClickBtn = () => {
    setShowBtn(prevState => !prevState);
  };

  let navigationItemList = (
    <>
      <NavigationItem link="/login">Login</NavigationItem>
      <NavigationItem link="/registatrion">Registatrion</NavigationItem>
    </>
  );

  if (isAuth) {
    navigationItemList = (
      <>
        <NavigationItem link="/" exact>
          Main
        </NavigationItem>
        <UserMenu handleClick={handleClickBtn} showBtn={showBtn}>
          <NavigationItem link="/personal" handleClick={handleClickBtn}>
            Personal
          </NavigationItem>
          <NavigationItem link="/logout" handleClick={handleClickBtn}>
            Logout
          </NavigationItem>
        </UserMenu>
      </>
    );
  }
  return (
    <ul className={classes.NavigationItems}>
      <nav>{navigationItemList}</nav>
    </ul>
  );
};

export default NavigationItems;
