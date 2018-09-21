/ Benchmark is a library that times
var Benchmark = require("benchmark");
var generate = require("../shared/generate");


// Generate an array of the given length.
var length = 1000000;
var stuff = generate(length);
var stuffSorted = stuff.sort((a , b) => a - b );
var randomValue = stuffSorted[Math.ceil(Math.random() * length)];

console.log(stuffSorted);
// A "suite" is a series of code snippets you
//   want to execute and time.
var suite = new Benchmark.Suite();

suite
// Add the function 'linearSearch' to the suite.
  .add("Binary Search", function binarySearch() {
    let left = 0;
    let right = stuffSorted.length -1;
    while (left <= right) {
      const mid = left + Math.floor((right-left)/2);
      if (stuffSorted[mid] === randomValue) {
        return mid;
      }
      if (stuffSorted[mid] < randomValue) {
        left = mid + 1;
      } else {
        right = mid - 1
      }
    }
    return false;
  })
  // On 'start', run the 'start' function.
  .on("start", function start() {
    console.log("Beginning benchmark...");
  })

  // On the 'complete' event, run the 'report' function.
  .on("complete", function report() {
    // Get successful benchmark.
    var benchmark = Benchmark.filter(this, "successful")[0];

    console.log("On average, " + benchmark.name + " took " + benchmark.stats.mean + " seconds to complete.");
  })

  // Run the test!
  .run();