import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>{props.title}</header>
      <p className={styles.content}>{props.content}</p>
      <Button className={styles.center} onClick={props.onConfirm}>
        Close
      </Button>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.querySelector("#backdrop-element")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          content={props.content}
          onConfirm={props.onConfirm}
        />,
        document.querySelector("#modal")
      )}
    </div>
  );
};

export default ErrorModal;
