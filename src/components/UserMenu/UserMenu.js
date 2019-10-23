import React from "react";
import classes from "./UserMenu.module.css";
import avatar from "../../assets/image/avatar.png";

const UserMenu = ({ children, showBtn, handleClick }) => {
  const classUserMenu = showBtn ? classes.userMenuItem : classes.disabled;

  return (
    <div className={classes.userMenu}>
      <button
        type="button"
        className={classes.btnDropDown}
        onClick={handleClick}
      >
        <img src={avatar} alt="avatar" className={classes.avatar} />
      </button>
      <div className={classUserMenu}>{children}</div>
    </div>
  );
};

export default UserMenu;
