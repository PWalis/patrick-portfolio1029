import React from "react";
import styles from "./ContactWrapper.module.css"

const ContactWrapper = (props) => {
    return (
        <div className={styles["ContactWrapper"]}>
            {props.children}
        </div>
    )
}

export default ContactWrapper