import React from 'react';
import styles from './Cell.module.css';
import color from '../../helpers/color.js';


function Cell (props) {
  let colors = color(props.value);
  let rgb;
  if (colors) {
    rgb = 'rgb(240,'+colors[0]+','+colors[1]+')';
  } else {
    rgb = 'rgb(240,240,240)';
  }
  
  if (props.value === null) {
    rgb = 'rgba(238, 228, 218, 0.35)';
  }
  
  return (
    <div className={styles.cell} style={{background: rgb}}>
      <span className={styles.span}>{props.value}</span>
    </div>
  );
}

export default Cell;