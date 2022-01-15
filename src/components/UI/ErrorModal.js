import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>{props.title}</header>
        <p className={styles.content}>{props.content}</p>
        <Button className={styles.center} onClick={props.onConfirm}>
          Close
        </Button>
      </Card>
    </div>
  );
};

export default ErrorModal;
