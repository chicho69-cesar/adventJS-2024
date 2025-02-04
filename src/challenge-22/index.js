function generateGiftSets(gifts) {
  const res = [];

  const q = gifts.map((val, idx) => ({
    arr: [val],
    idx,
  }));

  while (q.length > 0) {
    const item = q.splice(0, 1)[0];
    res.push(item.arr);

    for (let i = item.idx + 1; i < gifts.length; i++) {
      q.push({
        arr: [...item.arr, gifts[i]],
        idx: i,
      });
    }
  }
  
  return res;
}