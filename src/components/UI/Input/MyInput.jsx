import React from "react";
import classes from "./MyInput.module.css";

export default function MyButton(props) {
  return <input className={classes.myInput} {...props} />;
}
