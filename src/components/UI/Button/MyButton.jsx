import React from "react";
import classes from "./MyButton.module.css";

export default function MyButton({ danger, children, ...props }) {
  return (
    <button {...props} className={danger ? classes.myDangerBtn : classes.myBtn}>
      {children}
    </button>
  );
}
