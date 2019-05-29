// what is the index position of 'apples' in arr?
// does arr contain 'guava'?

function findFruit(fruit) {
  let pos = fruit.indexOf("apple");
  console.log("the apple is at " + pos);

  if (fruit.indexOf("guava") !== -1) {
    console.log("I have guava");
  } else {
    console.log("I have no guava");
  }
}

function runTest() {
  let arr = ["banana", "pear", "tangerine", "apple", "grape", "peach"];
  findFruit(arr);
}

runTest();
