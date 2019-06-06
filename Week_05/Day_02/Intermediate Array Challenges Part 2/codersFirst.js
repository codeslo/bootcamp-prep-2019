function codersFirst(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Coders") {
      const splicedValue = arr.splice(i, 1);
      console.log("This is the return value of splice: ", splicedValue);
      arr.unshift(splicedValue[0]);
    }
  }

  if (arr[0] !== "Coders") {
    arr.unshift("Coders");
  }
  return arr;
}

let example = codersFirst(["Doctors", "Lawyers", "Coders", "Coders"]);
let example2 = codersFirst(["Brokers", "Bakers"]);

console.log(example);
console.log(example2);
