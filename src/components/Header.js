import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Button from "./UI/Button";

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToAbout = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToProjects = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  const goToContact = () => {
    window.scrollTo({
      top: 1900,
      behavior: "smooth",
    });
  };

  let headerStyle =  offset < 50 ? styles["HeaderWrapper"] : styles["smallerHeaderWrapper"] 

  return (
    <header className={headerStyle}>
      <nav className={styles["NavLinksWrapper"]}>
        <Button className={styles["navLink"]} href="#" onClick={goToAbout}>
          ABOUT
        </Button>
        <Button className={styles["navLink"]} href="#" onClick={goToProjects}>
          PROJECTS
        </Button>
        <Button className={styles["navLink"]} href="#" onClick={goToContact}>
          CONTACT
        </Button>
      </nav>
    </header>
  );
};

export default Header;
