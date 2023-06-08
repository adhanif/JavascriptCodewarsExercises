// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;

// console.log(sumArray([1,1, 1, 11, 11, 2, 3]));,

// function countPositivesSumNegatives(input) {
//   if (input === null || input.length < 1) {
//     return [];
//   }
//   let sum = 0;
//   const positiveNumbers = input.filter((num) => {
//     if (num >= 1) {
//       return num;
//     } else if (num <= -1) {
//       sum += num;
//     }
//   });
//   return [positiveNumbers.length, sum];
// }

// console.log(countPositivesSumNegatives([]));

// Question2: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// var countSheep = function (num) {
//   if (num === 0) {
//     return "";
//   }
//   let string = "";
//   for (let i = 1; i <= num; i++) {
//     string += `${i} sheep...`;
//   }
//   return string;
// };

// console.log(countSheep(0));
// Question3:
// function squareDigits(num) {
//   if (num) {
//     const len = num.toString().length;
//     //   console.log(typeof len);
//     let newNum = "";
//     for (let i = 0; i < len; i++) {
//       const DigitStr = String(num)[i];
//       Digit = DigitStr * DigitStr;
//       newNum += Digit;
//     }
//     return Number(newNum);
//   } else {
//     return 0;
//   }
// }

// console.log(squareDigits());
// return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
// function squareDigits(num) {
//   console.log(("" + num).split(""));
// //   console.log(Number("" + num).split(""));
// }

// squareDigits(1234);

//Question4: Implement a function which convert the given boolean value into its string representation.Note: Only valid inputs will be given.

// function booleanToString(b) {
//   return b ? "true" : "false";
// }

//Question5: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str) {
//   return str.slice(1, -1);
// }
// console.log(removeChar("eloquent"));

//Question6: Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2 ;
// }
// console.log(lovefunc(0, 0));

//Question7: Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// function paperwork(n, m) {
//   return n < 0 || m < 0 ? 0 : n * m;
// }
// paperwork(-5, 5);

//Question8:Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => {
//   if (p1 !== p2 && p1 === "scissors" && p2 === "paper") {
//     return "Player 1 won!";
//   } else if (p1 !== p2 && p1 === "scissors" && p2 === "rock") {
//     return "Player 2 won!";
//   } else if (p1 === p2) {
//     return "Draw!";
//   }
// };

// console.log(rps("scissors", "rock"));

//Question9: Write a function to split a string and convert it into an array of words.
// "Robin Singh" ==> ["Robin", "Singh"]

// function stringToArray(string) {
//   return string.split(" ");
// }

// console.log(stringToArray("string Robin Singh"));

// Question 10:Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// function disemvowel(str) {
//   return str
//     .split("")
//     .map((word) => {
//       return word.replace(/[aeiou]/gi, "");
//     })
//     .join("");
// }

// console.log(disemvowel("What are you, a communist?"));

// Question 11: Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// var summation = function (num) {
//   let summ = 0;
//   for (let i = 1; i <= num; i++) {
//     summ += i;
//   }
//   return summ;
// };

// console.log(summation(8));

// Question 12: Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.,

// const binaryArrayToNumber = (arr) => {
//   let decimal = 0;
//   arr.forEach((num, index) => {
//     decimal += num * Math.pow(2, arr.length - 1 - index);
//   });
//   return decimal;
// };

// const binaryArrayToNumber = arr => {
//   return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
// }
// const binaryArrayToNumber = arr => {
//   return parseInt(Number(arr.join('')), 2)
// };
// console.log(binaryArrayToNumber([1, 1, 1, 1]));

// Question 13:Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// function repeatStr(n, s) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     str += s;
//   }
//   return str;
// }

// console.log(repeatStr(5, "Hello"));

// Question 14: Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str) {
//   let str1 = "";
//   for (let i = 0; i < str.length; i++) {
//     str1 += str[str.length - 1 - i];
//   }
//   return str1;
// }

// function solution(str){
//   return str.split('').reverse().join('');
// }

// console.log(solution("hello"));

//  Question 15: Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo! The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"

// function areYouPlayingBanjo(name) {
//   return name[0] === "r" || name[0] === "R"
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
// }

// console.log(areYouPlayingBanjo("adam"));

// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//   return z;
// }

// console.log(countBy(2, 5));

//  Question 16: Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total. Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//   return d >= 7 ? 40 * d - 50 : d >= 3 ? 40 * d - 20 : d * 40;
// }
// console.log(rentalCarCost(2));

//  Question 17: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. i.e [9, 3, '7', '3'])=> 22

// function sumMix(x) {
//   return x
//     .map((num) => {
//       return Number(num);
//     })
//     .reduce((total, cur) => {
//       return total + cur;
//     }, 0);
// }
// console.log(sumMix([9, 3, "7", "3"]));

//  Question 18: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// function descendingOrder(n) {
//   const a = Array.from(String(n), Number).sort((a, b) => b - a);
//   return Number(a.join(""));
//   // return Array.from(String(n), Number).join("");
// }

// console.log(descendingOrder(123223887789));

// Question 18:  Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// console.log(minMax([1, 2, 3, 4, 5]));

// Question 19: Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// function findAverage(array) {
//   return array && array.length
//     ? array.reduce((total, curr) => {
//         return total + curr;
//       }, 0) / array.length
//     : 0;
// }

// console.log(findAverage([1, 2, 3, 4]));

// Question 20 :You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again. // Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.

// function updateLight(current) {
//   return current === "green"
//     ? "yellow"
//     : current === "yellow"
//     ? "red"
//     : current === "red"
//     ? "green"
//     : 0;
// }

// console.log(updateLight("red"));

// Question 21 : Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((ele) => ele.split("").reverse().join(""))
//     .join(" ");
// }
// console.log(reverseWords("double  spaced  words"));

// Question 22 :
