import React from "react";
import styles from "./LargeWrapper.module.css";

const LargeWrapper = (props) => {
  return <div className={styles["LargeWrapper"]}>{props.children}</div>;
};

export default LargeWrapper;
