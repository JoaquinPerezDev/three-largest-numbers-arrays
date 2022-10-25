// Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array. 

// The function should return duplicate integers if necessary; for example, it should return [10,10,12] for input array of [10, 5, 9, 10, 12].

// Sample input: array = [141, 1, 17, -17, -27, 18, 541, 8, 7, 7]
// Sample output: [18, 141, 541]

//Naive approach: Much like binary search, we can use three pointers to compare values. We can iterate through the input array and as we compare values, depending on which value is the least we move that pointer right or left. At the end of the loop we can return the three numbers in a new results array. 

//O(n) time | O(1) space complexity
function findThreeLargestNumbers(array) {
const threeLargest = [null, null, null];
for(const num of array) {
  updateLargest(threelargest, num);
}
  return threeLargest;
}

function updateLargest(threeLargest, num) {
    if(threeLargest[2] == null || num > threeLargest[2]) {
      shiftAndUpdate(threeLargest, num, 2);
    } else if(threeLargest[1] == null || num > threeLargest[1]) {
      shiftAndUpdate(threeLargest, num, 1);
  } else if(threeLargest[0] == null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}
function shiftAndUpdate(array, num, idx) {
  for(let i = 0; i <= idx; i++) {
    if(i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}