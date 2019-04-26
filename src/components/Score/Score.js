import React from 'react';
import styles from './Score.module.css';


function Score (props) {
  let score = props.score;
  if (props.checkUndo) {
    score /= 4;
  }
  if (props.checkOnly2) {
    score /= 2;
  }
  return (
    <div className={styles.score}>
      <div className={styles.title}>SCORE</div>
      <div className={styles.scoreValue}>{Math.floor(score)}</div>
    </div>
  );
}

export default Score;