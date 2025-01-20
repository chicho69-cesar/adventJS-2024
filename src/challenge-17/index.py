def detect_bombs(grid: list[list[bool]]) -> list[list[int]]:
  res = []

  def add_bomb(i: int, j: int) -> int:
    return 1 if (i >= 0 and i < len(grid) and j >= 0 and j < len(grid[i]) and grid[i][j]) else 0

  for i in range(len(grid)):
    res.append([])

    for j in range(len(grid[i])):
      res[i].append(0)
      
      res[i][j] += add_bomb(i - 1, j - 1) + add_bomb(i - 1, j) + add_bomb(i - 1, j + 1)
      res[i][j] += add_bomb(i, j - 1) + add_bomb(i, j + 1)
      res[i][j] += add_bomb(i + 1, j - 1) + add_bomb(i + 1, j) + add_bomb(i + 1, j + 1)

  return res