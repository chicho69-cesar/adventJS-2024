function drawRace(indices, length) {
  const race = indices.reduce((acc, value, index) => {
    acc += ' '.repeat(indices.length - index - 1)
    let position = value < 0 ? length + value : value

    acc += `${'~'.repeat(position)}${value ? 'r' : '~'}${'~'.repeat(length - position - 1)}`
    acc += ` /${index + 1}\n`

    return acc
  }, '')

  return race.slice(0, -1)
}

module.exports = drawRace
