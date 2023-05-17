import React from "react";
import styles from "./SmallWrapper.module.css";

const SmallWrapper = (props) => {
  return <div className={styles["SmallWrapper"]}>{props.children}</div>;
};

export default SmallWrapper;
