function organizeInventory(inventory) {
  const res = {};

  inventory.forEach(({ name, quantity, category }) => {
    res[category] ||= {};
    res[category][name] = (res[category][name] ?? 0) + quantity;
  });

  return res;
}

module.exports = organizeInventory;
