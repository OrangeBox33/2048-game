import React from 'react';
import styles from './LessScore.module.css';

function lessScrore (props) {
  if (props.check[0]) {
    if (props.check[1]) {
      return (
        <div className={styles.lessScore}>
          <p className={styles.p}>Ваши очки будут уменьшены в 8 раз!</p>
          <button className={styles.button} type='button' onClick={props.onClick}>OK</button>
        </div>
      )
    }
    return (
      <div className={styles.lessScore}>
        <p className={styles.p}>Ваши очки будут уменьшены в 4 раза!</p>
        <button className={styles.button} type='button' onClick={props.onClick}>OK</button>
      </div>
    )
  }
  if (props.check[1]) {
    return (
      <div className={styles.lessScore}>
        <p className={styles.p}>Ваши очки будут уменьшены в 2 раза!</p>
        <button className={styles.button} type='button' onClick={props.onClick}>OK</button>
      </div>
    )
  }
  return <div></div>
}

export default lessScrore;