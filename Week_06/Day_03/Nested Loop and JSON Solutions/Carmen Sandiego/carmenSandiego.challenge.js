function findCarmen(obj) {
  let result = [];
  for (let key in obj) {
    let target = obj[key];
    if (target.searchResults.carmenSandiego) {
      result.push(target.country);
    }
  }

  return result;
}
