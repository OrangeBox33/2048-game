import React from 'react';
import styles from './Board.module.css';
import Cell from '../Cell/Cell.js';




function Board (props) {
  return (
    <div className={styles.activate} onKeyDown={props.onKeyDown} tabIndex="0">
      <div className={styles.board}>
        {
          props.cells.map(
            (cell) => {
              return <Cell key={cell.id} id={cell.id} x={cell.x} y={cell.y} value={cell.value} />
            }
          )
        }
      </div>
    </div>
  )
}

export default Board;