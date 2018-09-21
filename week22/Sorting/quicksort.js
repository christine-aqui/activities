var Benchmark = require("benchmark");
var generate = require("../shared/generate");

var length = 100;
var stuff = generate(length);

function quickSort(array) {

    if (array.length <= 1) {
		return array;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = array.pop();
		var length = array.length;

		for (var i = 0; i < length; i++) {
			if (array[i] <= pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}

        return newArray.concat(quickSort(left), pivot, quickSort(right));

    }
}

var suite = new Benchmark.Suite();

suite
// Add the function 'linearSearch' to the suite.
  .add("Linear Search", function() {
	  return quickSort(stuff.slice());
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