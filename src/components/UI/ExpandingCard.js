import React from "react";
import SmallWrapper from "./SmallWrapper";
import styles from "./ExpandingCard.module.css"

const ExpandingCard = (props) => {
    return (
        <div className={styles["card"]}>
            <SmallWrapper >
                <button onClick={ () => props.onClick(props.card)} className={styles["expandButton"]}>Expand</button>
                {props.children}
            </SmallWrapper>
        </div>
    )
    
}

export default ExpandingCard