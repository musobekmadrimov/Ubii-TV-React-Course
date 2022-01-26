import React from "react";
import classes from "./MyModal.module.css";

export default function MyModal({ children, visible, setVisible }) {
  return (
    <div
      className={`${classes.myModal} ${visible ? classes.active : ""}`}
      onClick={() => setVisible(false)}
    >
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
