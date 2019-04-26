const score = (arr, oldScore) => {
  //console.log(arr)
  let sum = 0;
  for (let i = 0; i < 16; i++) {
    //console.log(arr[i].value)
    if (arr[i].value) {
      //console.log('value ' + arr[i].value)
      for (let j = arr[i].value; j >= 4; j /= 2) {
        console.log('value='+arr[i].value)
        console.log('j='+j);
        console.log('sumBefore='+sum)
        sum += j;
        console.log('sum='+sum)
      }
    }
  }
  return sum;
}

export default score;