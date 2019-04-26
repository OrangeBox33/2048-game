const identityCheck = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].value !== arr2[i].value) return false;
  }
  return true;
}

export default identityCheck;