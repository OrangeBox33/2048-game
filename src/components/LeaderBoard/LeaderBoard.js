import React from 'react';
import styles from './LeaderBoard.module.css';

function LeaderBoard (props) {
  if (props.check) {
    let records = props.records.slice();
    records.sort( (a, b) => b.score - a.score);
    return (
      <div className={styles.liderboard}>
          <button className={styles.button} type='button' onClick={props.onClick}>Leaderboard</button>
          <div className={styles.block}>
            {
              records.map(
                (name, i) => {
                  return (
                    <div key={i}>
                      <div className={styles.score}>{name.score}:</div>
                      <div className={styles.name}>{name.name}</div>
                    </div>
                  ) 
                }
              )
            }
          </div>
      </div>
    );
  }
  return (
    <div className={styles.liderboard}>
      <button className={styles.button} type='button' onClick={props.onClick}>Leaderboard</button>
    </div>
  )
}

export default LeaderBoard;