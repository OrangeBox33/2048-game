const initCellsWith2 = () => {
  const cell1 = { y: createRandomCoord(), x: createRandomCoord(), value: 2 };
  const cell2 = { y: createRandomCoord(), x: createRandomCoord(), value: 2 };
  if (cell1.y === cell2.y && cell1.x === cell2.x) {
    cell2.x = (cell2.x === 0) ? 1 : cell2.x - 1;
  }
  return [cell1, cell2];
}

const createRandomCoord = () => {
  return Math.floor(Math.random() * 4);
}

const initCells = () => {
  const initCell = initCellsWith2();
  let i = 0;
  let cells = [];
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if ( (initCell[0].y === y && initCell[0].x === x) || (initCell[1].y === y && initCell[1].x === x) ) {
        cells.push({y: y, x: x, value: 2, id: i});
      } else {
        cells.push({y: y, x: x, value: null, id: i});
      }
      i++;
    }
  }
  return cells;
}


export default initCells