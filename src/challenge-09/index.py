from typing import List, Literal

Board = List[str]
Movement = Literal['U', 'D', 'R', 'L']
Result = Literal['none', 'crash', 'eat']

def move_train(board: Board, mov: Movement) -> Result:
  move_actions = {
    'D': len(board[0]) + 1,
    'L': -1,
    'R': 1,
    'U': -len(board[0]) - 1,
  }

  result_actions = {
    '·': 'none',
    '*': 'eat',
    '|': 'crash',
    'o': 'crash',
    'undefined': 'crash',
  }

  board_stringified = '|'.join(board)
  train_i = board_stringified.find('@')

  if train_i == -1:
    return 'none'

  next_pos = train_i + move_actions[mov]
  next_cell = board_stringified[next_pos] if next_pos < len(board_stringified) else 'undefined'

  return result_actions[next_cell]