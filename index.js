function superbowlWin(array) {
  let win = array.find(record => {
    return record.result === 'W'
  })
  
  if (win) {
    return win.year
  }
}
