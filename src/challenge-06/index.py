def in_box(box: list) -> bool:
  found = False

  for i in range(len(box)):
    x_index = box[i].find('*')

    if x_index == -1:
      continue
    if i in [0, len(box) - 1]:
      return False
    if x_index in [0, len(box[i]) - 1]:
      return False

    found = True

  return found