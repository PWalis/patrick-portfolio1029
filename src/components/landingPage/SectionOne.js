import React, { useEffect, useState } from "react";
import styles from "./SectionOne.module.css";
import cssLogo from "../../assets/icons8css3.png"
import htmlLogo from "../../assets/icons8html.png"
import javascriptLogo from "../../assets/icons8javascript.png"
import reactLogo from "../../assets/icons8react.png"

const SectionOne = (props) => {
  let [descriptor, setDescriptor] = useState({i:0})
  let adjectives = ["beautiful", "responsive", "fast", "engaging"]

  useEffect(() => {
    const timeout = setInterval(() => {
      setDescriptor(prevState => {return {i:(prevState.i < adjectives.length-1) ? prevState.i+1 : 0}})
    }, 3000)
    return () => {clearInterval(timeout)}
  },[])

  return (
    <section className={styles["section-one"]}>
      <div className={styles["grid-area-12-14"]}>
        <div className={styles["sticky"]}>
          <h1>Front-end Web Developer</h1>
        </div>
      </div>
      <div className={styles["grid-area-12-45"]}>
        <h2>
          I enjoy building 
        </h2>
        <div className={styles["in-and-out"]}>
          <h2 >{adjectives[descriptor.i]}</h2>
        </div>
        <h2>websites</h2>
      </div>
      <div className={styles["grid-area-23-24"]}>
        <div className={styles["codeMan"]}></div>
      </div>
      <div className={styles["grid-area-23-45"]}>
          <div><img src={cssLogo}/></div>
          <div><img src={htmlLogo}/></div>
          <div><img src={javascriptLogo}/></div>
          <div className={styles["react-logo"]}><img src={reactLogo}/></div>
      </div>
    </section>
  );
};

export default SectionOne;
