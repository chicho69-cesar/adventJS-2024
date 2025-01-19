function moveTrain(board, mov) {
  const moveActions = {
    D: board[0].length + 1,
    L: -1,
    R: 1,
    U: -board[0].length - 1,
  }

  const resultActions = {
    '·': 'none',
    '*': 'eat',
    '|': 'crash',
    'o': 'crash',
    'undefined': 'crash',
  }

  const boardStringified = board.join('|')
  const trainI = boardStringified.indexOf('@')

  if (trainI === -1) {
    return 'none'
  }

  const nextTrainCell = boardStringified[trainI + moveActions[mov]]

  return resultActions[nextTrainCell]
}
