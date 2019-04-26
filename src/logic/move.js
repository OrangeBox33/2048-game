const newArr = (cells, event, score) => {

  let newArr = [];
  let reBuildArr = [];

  let arr0 = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];

  let currentScore = score;

  let check = false;

  const moveLine = (arrLine) => {


    const moveValue = (arrLine) => {
      let readyArrLine = arrLine.slice();
      for (let i = 1; i < 4; i++) {
        if (!readyArrLine[i-1].value && readyArrLine[i].value) {
          readyArrLine[i-1].value = readyArrLine[i].value;
          readyArrLine[i].value = null;
          check = true;
        }
      }
      return readyArrLine;
    }

    const addition = (arrLine) => {
      let readyArrLine = arrLine.slice();
      for (let i = 1; i < 4; i++) {
        if (readyArrLine[i].value != null && readyArrLine[i].value === readyArrLine[i-1].value) {
          readyArrLine[i-1].value *= 2;
          currentScore += readyArrLine[i-1].value;
          readyArrLine[i].value = null;
          check = true;
        }
      }
      return readyArrLine;
    }

    let readyArrLine = moveValue(arrLine);
    readyArrLine = moveValue(readyArrLine);
    readyArrLine = moveValue(readyArrLine);
    readyArrLine = addition(readyArrLine);
    readyArrLine = moveValue(readyArrLine);

    return readyArrLine;
  }


  switch (event) {

    case 'ArrowRight': {
      arr0.push(cells[3], cells[2], cells[1], cells[0]);
      arr1.push(cells[7], cells[6], cells[5], cells[4]);
      arr2.push(cells[11], cells[10], cells[9], cells[8]);
      arr3.push(cells[15], cells[14], cells[13], cells[12]);
      newArr = newArr.concat(moveLine(arr0).reverse());
      newArr = newArr.concat(moveLine(arr1).reverse());
      newArr = newArr.concat(moveLine(arr2).reverse());
      newArr = newArr.concat(moveLine(arr3).reverse());
      break;
    }
    case 'ArrowLeft': {
      newArr = newArr.concat(moveLine(cells.slice(0, 4)));
      newArr = newArr.concat(moveLine(cells.slice(4, 8)));
      newArr = newArr.concat(moveLine(cells.slice(8, 12)));
      newArr = newArr.concat(moveLine(cells.slice(12)));
      break;
    }
    case 'ArrowUp': {

      // reBuildArr
      let j = 0;
      for (let i = 0; i < 4; i++) {
        for (j; j < 16; j += 4) {
          reBuildArr.push(cells[j])
        }
        j -= 15;
      }

      moveLine(reBuildArr.slice(0, 4));
      moveLine(reBuildArr.slice(4, 8));
      moveLine(reBuildArr.slice(8, 12));
      moveLine(reBuildArr.slice(12));

      // buildArr
      j = 0;
      for (let i = 0; i < 4; i++) {
        for (j; j < 16; j += 4) {
          newArr.push(reBuildArr[j])
        }
        j -= 15;
      }

      break;
    }

    case 'ArrowDown': {
      // reBuildArr
      let j = 12;
      for (let i = 0; i < 4; i++) {
        for (j; j >= 0; j -= 4) {
          reBuildArr.push(cells[j])
        }
        j += 17;
      }

      moveLine(reBuildArr.slice(0, 4));
      moveLine(reBuildArr.slice(4, 8));
      moveLine(reBuildArr.slice(8, 12));
      moveLine(reBuildArr.slice(12));

      j = 3;
      for (let i = 0; i < 4; i++) {
        for (j; j <= 15; j += 4) {
          newArr.push(reBuildArr[j])
        }
        j -= 17;
      }
      break;
    }

    default: break;
  }

  return [newArr, check, currentScore];
}

export default newArr;

