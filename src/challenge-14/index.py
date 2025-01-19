def min_moves_to_stables(reindeer, stables):
  reindeer_sorted = sorted(reindeer)
  stables_sorted = sorted(stables)
  total = 0

  for reinder in reindeer_sorted:
    position_to_remove = 0

    min_distance = float('inf')
    for idx, stable in enumerate(stables_sorted):
      distance = abs(stable - reinder)
      if distance < min_distance:
        position_to_remove = idx
        min_distance = distance

    total += min_distance
    stables_sorted.pop(position_to_remove)

  return total