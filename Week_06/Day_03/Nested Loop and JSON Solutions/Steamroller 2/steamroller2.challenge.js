function steamroller2(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    // if element is array, recurse
    if (Array.isArray(arr[i])) {
      steamroller2(arr[i], result);
    } else {
      // do not push duplicate numbers
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
  }
  // sort numerically
  result = result.sort((a, b) => {
    return a - b;
  });
  return result;
}
