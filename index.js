const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
    let a = array.find(record => {return record.result === 'W'})

    if (a) {
      return  a.year
    }
}

