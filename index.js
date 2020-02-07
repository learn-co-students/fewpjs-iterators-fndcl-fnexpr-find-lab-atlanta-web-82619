function superbowlWin(arr) { 
  let result = arr.find(obj => {
    return obj.result === 'W';
  })
  if (result) {
    return result.year;
  }
  else {
    return undefined;
  }
}