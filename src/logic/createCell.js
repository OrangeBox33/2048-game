const createCell = (cells, only2) => {
  let newCells = cells.slice();
  let emptyValue = [];
  for (let i = 0; i < 16; i++) {
    if (!cells[i].value) { emptyValue.push(cells[i]); }
  }
  if (emptyValue.length) {
    const index = Math.floor(Math.random() * emptyValue.length);
    newCells[emptyValue[index].id].value = only2 ? 2 : initValue();
  }
  return newCells;
}

const initValue = () => {
  return (Math.random() < 0.2) ? 4 : 2;
}

export default createCell;