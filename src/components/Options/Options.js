import React from 'react';
import styles from './Options.module.css';

function Options(props) {
  return (
    <div className={styles.options}>
      <p className={styles.p}>Options</p>
      <div className={styles.preContainer}>
        <label className={styles.container}>Activate Undo
          <input type="checkbox" className={styles.input} onClick={props.onClickUndo} />
          <span className={styles.checkmark}></span>
        </label>
        <br/>
        <label className={styles.container}>Create 2 only
          <input type="checkbox" className={styles.input} onClick={props.onClickOnly2} />
          <span className={styles.checkmark}></span>
        </label>
      </div>
    </div>
  )
}





export default Options;