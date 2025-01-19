type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

export function moveTrain(board: Board, mov: Movement): Result {
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

  if (trainI === -1) return 'none'

  const nextPos = trainI + moveActions[mov]
  const nextCell = boardStringified[nextPos]

  return resultActions[nextCell]
}
