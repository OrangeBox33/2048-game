import move from './move.js'

const lose = (arr_) => {
  let arr =  JSON.stringify(arr_);
  arr =  JSON.parse(arr);
  let check = false;
  let checkNum = 0;
  for (let i = 0; i < 16; i++) {
    if (!arr[i].value) return false;
  }

  check = move(arr, 'ArrowUp')[1];
  if (!check) checkNum++;
  check = move(arr, 'ArrowDown')[1];
  if (!check) checkNum++;
  check = move(arr, 'ArrowLeft')[1];
  if (!check) checkNum++;
  check = move(arr, 'ArrowRight')[1];
  if (!check) checkNum++;

  return (checkNum === 4) ? true : false;
}

export default lose;