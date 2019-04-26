import React from 'react';
import styles from './NewGame.module.css';

function NewGame (props) {
  return (
  <button className={styles.newGame} onClick={props.onClick}>New Game</button>
  );
}

export default NewGame;