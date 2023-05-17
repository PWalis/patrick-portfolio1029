import React from "react";
import styles from "./ContactSmallWrapper.module.css";

const ContactSmallWrapper = (props) => {
  return <div className={styles["ContactSmallWrapper"]}>{props.children}</div>;
};

export default ContactSmallWrapper;
