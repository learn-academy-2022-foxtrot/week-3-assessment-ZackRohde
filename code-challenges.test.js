// ASSESSMENT 3: Coding Practical Questions with Jest

// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// describe("greaterThanTwo", () => {
//   it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
//     expect(greaterThanTwo(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(greaterThanTwo(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })

// ReferenceError: greaterThanTwo is not defined

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// Create a function named greaterThanTwo.
// Create two variables, one that is equal to 0, and one that is equal to 1 as this is what the Fibonacci sequence starts with.
// Create the starting sequence (n2) at 1.
// Now the for loop is starting at 2 and we must build on it from there meaning the previous values will be added and once they are added we will get the new number.

const greaterThanTwo = (num) => {
  let n1 = [1, 1]
  let n2 = [1]
  for (let i = 2; i < num; i++) {
    n1[i] = n1[i - 2] + n1[i - 1]
  }
  return n1
}
console.log(greaterThanTwo(10))


// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
