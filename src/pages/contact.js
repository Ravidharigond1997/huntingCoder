import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { headers } from "../../next.config";
import { Josefin_Sans } from "next/font/google";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, phone, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json(data))
      .then((data) => {
        console.log("Success", data);
        alert("Thank you for contacting us");
        setDesc("");
        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputUserName" className={styles.label}>
            User Name:
          </label>
          <input
            type="text"
            className={styles.formControll}
            name="username"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.label}>
            Email address:
          </label>
          <input
            type="email"
            className={styles.formControll}
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label className={styles.label} htmlFor="exampleInputPassword1">
            Phone Number:
          </label>
          <input
            type="text"
            className={styles.formControll}
            name="phone"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            id="exampleInputPassword1"
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.label} htmlFor="desc">
            Elaborate your concern:
          </label>
          <textarea
            className={styles.formControll}
            placeholder="Write your concern here"
            value={desc}
            onChange={(event) => {
              setDesc(event.target.value);
            }}
            id="description"
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
