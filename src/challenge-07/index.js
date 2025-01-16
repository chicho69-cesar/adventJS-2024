function fixPackages(packages) {
  let packagesFixed = "";
  let stack = [];

  for (let char of packages) {
    if (char === "(") {
      stack.push(packagesFixed);
      packagesFixed = "";
      continue;
    }

    if (char === ")") {
      let packagesReversed = packagesFixed.split("");
      packagesReversed.reverse();

      packagesFixed = stack.pop() + packagesReversed.join("");
      continue;
    }

    packagesFixed += char;
  }

  return packagesFixed;
}