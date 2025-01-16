function organizeShoes(shoes) {
  const organizedShoes = {}
  const result = []

  shoes.forEach((shoe) => {
    organizedShoes[shoe.size] ||= {}
    organizedShoes[shoe.size][shoe.type] ||= 0
    organizedShoes[shoe.size][shoe.type]++

    if (organizedShoes[shoe.size]['I'] > 0 && organizedShoes[shoe.size]['R'] > 0) {
      result.push(shoe.size)
      organizedShoes[shoe.size]['I']--
      organizedShoes[shoe.size]['R']--
    }
  })

  return result.sort()
}

module.exports = organizeShoes
