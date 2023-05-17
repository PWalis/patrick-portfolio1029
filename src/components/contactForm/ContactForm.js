import React, { useState } from "react";
import LargeWrapper from "../UI/LargeWrapper";
import ContactWrapper from "./ContactWrapper";
import styles from "./ContactForm.module.css";
import Button from "../UI/Button";
import Mailgun from "mailgun.js";

const ContactForm = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formData = require("form-data");
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: "fd4cf4e6246a3fa0ace65837a15f9d10-6b161b0a-88cea5f5",
  });

  const handleSubmit = (e) => {
    const data = {
      from: `<${inputData.email}>`,
      to: ["pwilky1016@gmail.com"],
      subject: inputData.name + "sent you a message",
      text: inputData.message,
    };
    mg.messages
      .create("sandbox7609df6d133a44e2844cec7a7fb26467.mailgun.org", data)
      .then((msg) => console.log(msg)) // logs response data
      .catch((err) => console.log(err)); // logs any error
  };

  const onNameChange = (e) => {
    setInputData({ ...inputData, name: e.target.value });
    // console.log(inputData);
  };

  const onEmailChange = (e) => {
    setInputData({ ...inputData, email: e.target.value });
  };

  const onMessageChange = (e) => {
    setInputData({ ...inputData, message: e.target.value });
  };

  return (
    <LargeWrapper>
      <ContactWrapper>
        <div className={styles["contact-title"]}>
          <h2>Contact Me</h2>
        </div>

        <div className={styles["label-input"]}>
          <label className={styles["input"]}>Name </label>
          <input
            className={styles["input"]}
            type="text"
            placeholder="Your Name..."
            value={inputData.name}
            onChange={(e) => onNameChange(e)}
          />

          <label className={styles["input"]}>Email </label>
          <input
            className={styles["input"]}
            type="text"
            placeholder="Your Email..."
            value={inputData.email}
            onChange={(e) => onEmailChange(e)}
          />

          <label className={styles["input"]}>Message </label>
          <textarea
            className={styles["input-large"]}
            type="text"
            placeholder="Write Something Beautiful"
            value={inputData.message}
            onChange={(e) => onMessageChange(e)}
          />
        </div>
        <Button className={styles["button"]} onClick={handleSubmit}>
          Send
        </Button>
      </ContactWrapper>
    </LargeWrapper>
  );
};

export default ContactForm;
