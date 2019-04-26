import React from 'react';
import styles from './Undo.module.css';

function Undo (props) {
  if (props.check) {
    return (
      <button className={styles.undo} onClick={props.onClick}>Undo</button>
      );
  } else {
    return (<div/>)
  }
}

export default Undo;