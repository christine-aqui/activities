// Benchmark is a library that times
const Benchmark = require("benchmark");
const generate = require("../shared/generate");
const length = 20;
let list = generate(length);

var suite = new Benchmark.Suite();

function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

console.log(list);
let arr = mergeSort(list.slice());

suite.add("Merge Sort",
  // Split the array into halves and merge them recursively
  function() {
    return mergeSort(list.slice());
  }

).on("start", function start() {
  console.log("Beginning benchmark...");
}).on("complete", function report() {
  var benchmark = Benchmark.filter(this, "successful")[0];

  console.log("On average, " + benchmark.name + " took " + benchmark.stats.mean + " seconds to complete.");
}).run();


console.log('***********************');
console.log(list);
console.log(mergeSort(list))
console.log('***********************');
