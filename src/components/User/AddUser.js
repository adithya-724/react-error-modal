import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={submitHandler} className={styles["form-container"]}>
        <div className={styles.item}>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" />
        </div>
        <div className={styles.item}>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
