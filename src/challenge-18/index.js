function findInAgenda(agenda, phone) {
  const agendaSplit = agenda.split("\n");
  
  let resultsFound = 0;
  let result = null;

  const telRegex = /\+[\d]*\-[\d]*\-[\d]*\-[\d]*/;
  const nameRegex = /<([\w ]*)>/;
  
  agendaSplit.forEach((val) => {
    const tel = telRegex.exec(val)?.[0];
    const names = nameRegex.exec(val);
    const name_with = names[0];
    const name_without = names[1];
    const address = val.replace(tel, "").replace(name_with, "").trim();
    
    if (tel?.includes(phone)) {
      result = { address: address, name: name_without };
      resultsFound += 1;
    }
  });

  if (resultsFound != 1) {
    return null;
  }

  return result;
}
