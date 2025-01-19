function calculatePrice(ornaments) {
  let total = 0
  let prev = 0

  const values = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100,
  }
  
  for (let char of ornaments) {
    const currentValue = values[char]

    if (currentValue === undefined) {
      return undefined
    }

    if (currentValue > prev) {
      total -= prev * 2
    }

    total += currentValue
    prev = currentValue
  }

  return total
}