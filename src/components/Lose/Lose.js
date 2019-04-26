import React from 'react';
import styles from './Lose.module.css';

function Lose (props) {
  if (!props.check) return (<div></div>);
  let score = props.score;
  if (props.checkUndo) {
    score /= 4;
  }
  if (props.checkOnly2) {
    score /= 2;
  }
  return (
    <div className={styles.lose}>
      <h1 className={styles.h1}>You lose</h1>
      <p className={styles.p}>Score: {Math.floor(score)}</p>
      <form>
        <input className={styles.input} type='text' value={props.nickName} onChange={props.onChange} placeholder='Your nickname' />
        <input className={styles.button} type="submit" onClick={props.onClick} value='Submit' />
      </form>
    </div>
  );
}

export default Lose;