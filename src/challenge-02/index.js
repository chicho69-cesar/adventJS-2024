function createFrame(names) {
  const largest = names.reduce((acc, curr) => Math.max(acc, curr.length), 0);
  
  let result = `${"*".repeat(largest + 4)}\n`;
  
  names.forEach((item) => {
    result += `* ${item.padEnd(largest, " ")} *\n`;
  });
  
  result += "*".repeat(largest + 4);
  
  return result;
}

module.exports = createFrame;
