import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredAge, enteredName);
  };
  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card>
      <form onSubmit={submitHandler} className={styles["form-container"]}>
        <div className={styles.item}>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" onChange={nameHandler} />
        </div>
        <div className={styles.item}>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" onChange={ageHandler} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
