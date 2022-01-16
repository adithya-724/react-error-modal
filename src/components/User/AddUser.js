import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const addName = useRef();
  const addAge = useRef();

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const userName = addName.current.value;
    const userAge = addAge.current.value;

    if (userAge.trim().length === 0 || userName.trim().length === 0) {
      setError({
        title: "Invalid entry",
        content: "Please enter a valid input",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid entry",
        content: "Please enter a valid input for age ( > 1 )",
      });
      return;
    }
    props.fetchData({ name: userName, age: userAge });
    // to clear input fields ( DOM manipulation )

    addAge.current.value = "";
    addName.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={submitHandler} className={styles["form-container"]}>
          <div className={styles.item}>
            <label htmlFor="name">Username</label>
            <input ref={addName} type="text" id="name" />
          </div>
          <div className={styles.item}>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" ref={addAge} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
