function steamroller(arr) {
  let result = [];
  // get each subarray
  for (let i = 0; i < arr.length; i++) {
    let subArray = arr[i];
    // run a loop for each element of the subarray
    for (let j = 0; j < subArray.length; j++) {
      let element = subArray[j];
      result.push(element);
    }
  }

  return result;
}
