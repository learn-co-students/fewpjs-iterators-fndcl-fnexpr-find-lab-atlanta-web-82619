const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(games) {
  let win = games.find( game => game.result === 'W');
  if (win) {
     return win.year;
  } else {
    return undefined;
  }
}
