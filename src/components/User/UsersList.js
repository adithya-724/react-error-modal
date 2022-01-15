import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card>
      <ul className={styles.list}>
        {props.users.map((user, key) => (
          <li key={key}>
            {user.name} <br /> {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
