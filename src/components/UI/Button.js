import React from "react";
import styles from "./Button.module.css";
import cx from "classnames";

const Button = (props) => {
  const classes = cx(styles.btn, props.className);
  return (
    <button
      className={classes}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
