function inBox(box) {
  let found = false

  for (let i = 0; i < box.length; i++) {
    const xIndex = box[i].indexOf('*')

    if (xIndex === -1) continue
    if ([0, box.length - 1].includes(i)) return false
    if ([0, box[i].length - 1].includes(xIndex)) return false

    found = true
  }

  return found
}

module.exports = inBox
