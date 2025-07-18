// Question1:
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
//   arr.forEach((num, i) => {
//     decimal += num * Math.pow(2, arr.length - 1 - i);
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

// Question 22 : In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// function makeNegative(num) {
//   return num < 0? num : -num;
// }

// console.log(makeNegative(-9));

// Question 23 :Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//   return s
//     .split("")
//     .map((currentValue, i) => {
//       currentValue = currentValue.toUpperCase();
//       for (let i = 0; i < i; i++) {
//         currentValue += currentValue[0].toLowerCase();
//       }
//       return currentValue;
//     })
//     .join("-");
// }

// function accum(s) {
//   return s
//     .split("")
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join("-");
// }
// console.log(accum("abcd"));

// Question 24 :Examples:Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// function countSmileys(arr) {
//   let face = 0;
//   arr.forEach((ele) => {
//     if (
//       ele === ":)" ||
//       ele === ":D" ||
//       ele === ";)" ||
//       ele === ";D" ||
//       ele === ";-D" ||
//       ele === ":-D" ||
//       ele === ":~D" ||
//       ele === ";~D" ||
//       ele === ":-)" ||
//       ele === ";-)" ||
//       ele === ":~)" ||
//       ele === ";~)"
//     ) {
//       console.log("this");
//       face++;
//     }
//     return face;
//   });
//   return face;
// }

// console.log(countSmileys([':D',':~)',';~D',':)']));

// Question 25 :Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// function setAlarm(employed, vacation) {
//   return employed && !vacation  ? true : false;
// }

// console.log(setAlarm(true, false));

// Question 26 :Given a non-empty array of integers, return the result of multiplying the values together in order. Example:// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x) {
//   return x.reduce((total, cur) => {
//     return total * cur;
//   }, 1);
// }
// console.log(grow([1, 2, 3, 4]));

// Question 26: There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// function findUniq(arr) {
//   const countMap = {};
//   arr.forEach((number) => {
//     if (countMap[number]) {
//       countMap[number]++;
//     } else {
//       countMap[number] = 1;
//     }
//   });
//   const uniqueNumber = Object.keys(countMap)
//     .filter((key) => countMap[key] === 1)
//     .join("");

//   return uniqueNumber ? Number(uniqueNumber) : undefined;
// }

// console.log(findUniq([1, 0, 0]));

// Question 27: our task is to find the first element of an array that is not consecutive. By not consecutive we mean not exactly 1 larger than the previous element of the array. E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number. If the whole array is consecutive then return null2.

//The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// function firstNonConsecutive(arr) {
//   for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] !== arr[i - 1] + 1) {
//       return arr[i];
//     }
//   }
//   return null;
// }

// console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]));

// Question 28: Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }
// const myObject = new SmallestIntegerFinder();
// console.log(myObject.findSmallestInt([34, -345, -1, 100]));

// Question 29: Given two arrays, a1 and a2, sort the elements of a2 based on the the i of the word in a1 that begins with the same letter.

// Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']
// Output ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

// function sortArray(a1, a2) {
//   const sorted = [];
//   a1.forEach((_, i) => {
//     for (let i = 0; i < a1.length; i++) {
//       if (a2[i][0] === a1[i][0]) {
//         sorted.push(a2[i]);
//       }
//     }
//   });
//   return sorted;

// return a1.map((ele1)=>{
//     return a2.filter((ele2)=>{
//         return ele2[0] === ele1[0]})
//     })
// }
// var a1 = ["jellyfish", "koi", "caribou", "owl", "dolphin"];
// var a2 = ["ostrich", "jaguar", "deer", "camel", "kangaroo"];
// console.log(sortArray(a1, a2));

// Question 30:  Given a string of words, you need to find the highest scoring word.Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. For example, the score of abad is 8 (1 + 2 + 1 + 4). You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.

// function high(x) {
//   const highest = new Map();
//   let maxValue = 0;
//   let maxkey = null;
//   x.split(" ").map((ele) => {
//     const a = ele.split("").reduce((acc, curr) => {
//       return acc + curr.charCodeAt() - 96;
//     }, 0);
//     return highest.set(ele, a);
//   });
//   for (const [key, value] of highest) {
//     if (value > maxValue) {
//       maxValue = value;
//       maxkey = key;
//     }
//   }
//   return maxkey;
// }

// console.log(high("what time are we climbing up the volcano"));

// Question 31: Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// function doubleChar(str) {
//   return str
//     .split("")
//     .map((ele) => {
//       return (ele += ele);
//     })
//     .join("");
// }

// console.log(doubleChar("1234!_ "));

// Question 32: You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number. The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// function stray(numbers) {
//   let values = {};
//   numbers.forEach((ele) => {
//     if (values[ele]) {
//       values[ele]++;
//     } else {
//       values[ele] = 1;
//     }
//   });
//   console.log(values);
//   for (const key in values) {
//     if (values[key] === 1) {
//       return Number(key);
//     }
//   }
// }

// console.log(stray([1, 2, 1]));

// function stray(numbers) {
//   console.log(numbers.iOf(1));
//   for (let num of numbers) {
//     // console.log(numbers.iOf(num));
//     if (numbers.iOf(num) === numbers.lastIOf(num)) {
//       return num;
//     }
//   }
// }

// stray([1, 2, 1]);

// Question 33:Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function likes(names) {
//   if (names.length === 0) {
//     return "no one likes this";
//   } else if (names.length === 1) {
//     return `${names[0]} likes this`;
//   } else if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (names.length > 3) {
//     return `${names[0]}, ${names[1]} and ${
//       names.length - 2
//     } others like this`;
//   }
// }

// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Jacob", "Alex", "Alex", "Jacob", "Mark", "Max", "Jacob", "Alex"]));

// Question 34: Task: Your task is to write a function which returns the sum of following series upto nth term(parameter). Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// function SeriesSum(n) {
//   let a = 0;
//   let x = 1;
//   for (let i = 0; i < n; i++) {
//     a += 1 / x;
//     x = x + 3;
//   }
//   a = a.toFixed(2);
//   return a;
// }
// console.log(SeriesSum(5));

// Question 35: You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//   const numberIndices = [];
//   const numbersToKeep = [];

//   array.forEach((number, i) => {
//     if (number % 2 === 0) {
//       numberIndices.push(i);
//       numbersToKeep.push(number);
//     }
//   });

//   // Remove the numbers from the array
//   numbersToKeep.forEach((number) => {
//     const i = array.iOf(number);
//     if (i !== -1) {
//       array.splice(i, 1);
//     }
//   });

//   // Sort the remaining elements of the array
//   array.sort((a, b) => a - b);

//   // Insert the numbers back into the array at
//   numberIndices.forEach((i, i) => {
//     array.splice(i, 0, numbersToKeep[i]);
//   });
//   return array;
// }
// console.log(sortArray([5, 1, 8, 6, 3, 4, 2]));

// Question 36: Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// function solution(string) {
// if (string === "") {
//   return "";
// }
// const i1 = [];

// string.split("").filter((ele, i) => {
//   if (ele === ele.toUpperCase()) {
//     i1.push(i);
//   }
// });
// i1.forEach((ele, i) => {
//   const stringArray = string.split("");
//   stringArray.splice(ele + i, 0, " ");
//   string = stringArray.join("");
// });
// return string;
// console.log([...string]);
// return [...string]
//   .map((char) => {
//     return char === char.toUpperCase() ? ` ${char}` : char;
//   })
// .join("");
// }

// console.log(solution("camelCasingTestCasing"));

// Question 37: In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// function DNAStrand(dna) {
//   return [...dna]
//     .map((char) => {
//       return char === "A"
//         ? "T"
//         : char === "T"
//         ? "A"
//         : char === "C"
//         ? "G"
//         : char === "G"
//         ? "C"
//         : "";
//     })
//     .join("");
// }
// console.log(DNAStrand("ATTGC"));

// Question 38: Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// function getSum(a, b) {
//   const range = (start, stop, step) =>
//     Array.from({ length: stop - start + 1 }, (_, i) => start + i);
//   if (a === b) {
//     return a;
//   } else if (a > b) {
//     return range(b, a, 1).reduce((total, curr) => {
//       return (total += curr);
//     }, 0);
//   } else {
//     return range(a, b, 1).reduce((total, curr) => {
//       return (total += curr);
//     }, 0);
//   }
// }

// console.log(getSum(-1, 2));

// const range2 = (start, end) => {
//   return Array.from({ length: end - start + 1 }, (_, i) => start + i);
// };

// Question 39: Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.(In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isTriangle(7,2,2));

// Question 40: You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   return arr.reduce((total, curr) => {
//     if (curr < 0) {
//       return total;
//     } else {
//       return (total += curr);
//     }
//   }, 0);
// }

// console.log(positiveSum([1, -4, 7, 12]));

// Question 41: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//   str = str.toLowerCase();
//   let count = {};
//   str.split("").forEach((char) => {
//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//   });

//   return !count.x && !count.o
//     ? true
//     : !count.x || !count.o
//     ? false
//     : count.x === count.o
//     ? true
//     : false;

//   //   if (!count.x && !count.o) {
//   //     return true;
//   //   } else if (!count.x || !count.o) {
//   //     return false;
//   //   } else if (count.x === count.o) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
// }

// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }
// console.log(XO("ooom"));

// Question 42: Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// function litres(time) {
//   return Math.floor(time * 0.5);
// }
// console.log(litres(0.82));

// Question 43: Given a list of integers, determine whether the sum of its elements is odd or even.Give your answer as a string matching "odd" or "even".If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// function oddOrEven(arr) {
//   return arr.reduce((total, curr) => {
//     return total + curr;
//   }, 0) % 2
//     ? "odd"
//     : "even";
// }

// console.log(oddOrEven([]));

// Question 44: You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter. Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// const areaOrPerimeter = function (l, w) {
//   return l === w ? l * w : l !== w ? (l + w) * 2 : 0;
// };

// console.log(areaOrPerimeter(6, 10));

// Question 45: Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.

// const pokemons = [
//   {
//     id: 1,
//     name: "Bulbasaur",
//     type: ["Grass", "Poison"],
//     base: {
//       HP: 45,
//       Attack: 49,
//       Defense: 49,
//       Speed: 45,
//       "Sp. Attack": 65,
//       "Sp. Defense": 65,
//     },
//   },
//   {
//     id: 2,
//     name: "Charmander",
//     type: ["Fire"],
//     base: {
//       HP: 39,
//       Attack: 52,
//       Defense: 43,
//       Speed: 65,
//       "Sp. Attack": 60,
//       "Sp. Defense": 50,
//     },
//   },
//   {
//     id: 3,
//     name: "Squirtle",
//     type: ["Water"],
//     base: {
//       HP: 44,
//       Attack: 48,
//       Defense: 65,
//       Speed: 43,
//       "Sp. Attack": 50,
//       "Sp. Defense": 64,
//     },
//   },
// ];

// console.log(pokemons.name);

// Question #46 We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num) {
//   return num.toString();
// }

// console.log(numberToString(25));

// Question #47  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// function isIsogram(str) {
//   const str1 = str.toLowerCase();
//   const unique = new Set(str1);
//   if (str1.length === unique.size) {
//     return true;
//   } else if (str1.length > unique.size) {
//     return false;
//   }
// }

// console.log(isIsogram("aba"));

// Question #48  You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// const findNextSquare = (sq) => {
//   const num = Math.sqrt(sq);
//   if (num - Math.floor(num) !== 0) {
//     return -1;
//   } else {
//     const newSqr = num + 1;
//     return newSqr ** 2;
//   }
// };

// console.log(findNextSquare(114));

// Question #49 Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = (n) => {
//   let arr = [];
//   for (let i = n; i > 0; i--) {
//     arr.push(i);
//   }
//   return arr;
// };

//or
// const reverseSeq = (n) => {
//   return Array(n)
//     .fill(0)
//     .map((ele, i) => n - i);
// };

// console.log(reverseSeq(5));

// Question #50 This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

// const checkForFactor = (base, factor) => {
//   return base % factor === 0 ? true : false;
// };
// console.log(checkForFactor(9, 2));

// Question #51 Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3,6) should equal 15

// const move = (position, roll) => {
//   return roll * 2 + position;
// };
// console.log(move(2, 5));

// Question #52 Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// const duplicateCount = (text) => {
//   text = text.toLowerCase();
//   let duplicates = {};
//   text.split("").forEach((ele) => {
//     if (duplicates[ele]) {
//       duplicates[ele]++;
//     } else {
//       duplicates[ele] = 1;
//     }
//   });
//   let count = 0;
//   for (key in duplicates) {
//     if (duplicates[key] > 1) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(duplicateCount(""));

// Question #53 The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
// function cockroachSpeed(s) {
//   return Math.floor((s * 1000) / 36);
// }

// console.log(cockroachSpeed(1.08));

// Question #54 In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.

// const findDifference = (a, b) => {
//  return Math.abs(
//     a.reduce((acc, curr) => acc * curr, 1) -
//       b.reduce((acc, curr) => acc * curr, 1)
//   );
// };
// console.log(findDifference([2, 2, 3], [5, 4, 1]));

// Question #55  Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// function sumStr(a, b) {
//   return (Number(a) + Number(b)).toString();
// }
// console.log(sumStr("4", "5"));:

// Question #56 Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// function solution(str, ending) {
//   return str.endsWith(ending);
// }
// console.log(solution("abcde", "cded"));

// Question #57 Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function smash(words) {
//   return words.join(" ");
// }
// console.log(smash(["hello", "world"]));

// Question #57 I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// Monday --> 12
// Tuesday --> numbers greater than 95
// Wednesday --> 34
// Thursday --> 0
// Friday --> numbers divisible by 2
// Saturday --> 56
// Sunday --> 666 or -666
// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

// const AmIAfraid = (day, num) => {
//   switch (day) {
//     case "Monday":
//       return num === 12;
//     case "Tuesday":
//       return num > 95;
//     case "Wednesday":
//       return num === 34;
//     case "Thursday":
//       return num === 0;
//     case "Friday":
//       return num % 2 === 0;
//     case "Saturday":
//       return num === 56;
//     case "Sunday":
//       return num === 666 || num === -666;
//     default:
//       return false;
//   }
// };
// console.log(AmIAfraid("Monday", 13));

// Question #58 Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

// const boom = (arr) => {
//   return arr.join("").includes("7") ? "boom" : "there is no 7 in the array";
// };

// console.log(boom([8, 6, 33, 100]));

// Question #59  The function finds out which blog has the most likes. If there are many top favorites, it is enough to return one of them. The value returned by the function could be in the following format:

// {
//   title: "Canonical string reduction",
//   author: "Edsger W. Dijkstra",
//   likes: 12
// }

// const listWithOneBlog = [
//   {
//     _id: "5a422a851b54a676234d17f7",
//     title: "React patterns",
//     author: "Michael Chan",
//     url: "https://reactpatterns.com/",
//     likes: 7,
//     __v: 0,
//   },
//   {
//     _id: "5a422aa71b54a676234d17f8",
//     title: "Go To Statement Considered Harmful",
//     author: "Edsger W. Dijkstra",
//     url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
//     likes: 5,
//     __v: 0,
//   },
//   {
//     _id: "5a422b3a1b54a676234d17f9",
//     title: "Canonical string reduction",
//     author: "Edsger W. Dijkstra",
//     url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
//     likes: 12,
//     __v: 0,
//   },
//   {
//     _id: "5a422b891b54a676234d17fa",
//     title: "First class tests",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
//     likes: 10,
//     __v: 0,
//   },
//   {
//     _id: "5a422ba71b54a676234d17fb",
//     title: "TDD harms architecture",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
//     likes: 0,
//     __v: 0,
//   },
//   {
//     _id: "5a422bc61b54a676234d17fc",
//     title: "Type wars",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
//     likes: 2,
//     __v: 0,
//   },
// ];

// const maxLikes = (arr) => {
//   let highestLikeCount;
//   arr.forEach((element) => {
//     if (!highestLikeCount) {
//       highestLikeCount = element;
//     } else if (element.likes > highestLikeCount.likes) {
//       highestLikeCount = element;
//     }
//   });
//   const outputObject = {
//     title: highestLikeCount.title,
//     author: highestLikeCount.author,
//     likes: highestLikeCount.likes,
//   };
//   return outputObject;
// };
// console.log(maxLikes(listWithOneBlog));

//  Question #60  use previpus question's array and  Define a function called mostBlogs that receives an array of blogs as a parameter. The function returns the author who has the largest amount of blogs. The return value also contains the number of blogs the top author has:
// const listWithOneBlog = [
//   {
//     _id: "5a422a851b54a676234d17f7",
//     title: "React patterns",
//     author: "Michael Chan",
//     url: "https://reactpatterns.com/",
//     likes: 7,
//     __v: 0,
//   },
//   {
//     _id: "5a422aa71b54a676234d17f8",
//     title: "Go To Statement Considered Harmful",
//     author: "Edsger W. Dijkstra",
//     url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
//     likes: 5,
//     __v: 0,
//   },
//   {
//     _id: "5a422b3a1b54a676234d17f9",
//     title: "Canonical string reduction",
//     author: "Edsger W. Dijkstra",
//     url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
//     likes: 12,
//     __v: 0,
//   },
//   {
//     _id: "5a422b891b54a676234d17fa",
//     title: "First class tests",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
//     likes: 10,
//     __v: 0,
//   },
//   {
//     _id: "5a422ba71b54a676234d17fb",
//     title: "TDD harms architecture",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
//     likes: 0,
//     __v: 0,
//   },
//   {
//     _id: "5a422bc61b54a676234d17fc",
//     title: "Type wars",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
//     likes: 2,
//     __v: 0,
//   },
// ];
// const mostBlogs = (blogs) => {
//   let mostAuthor = {};

//   blogs.forEach((blog) => {
//     if (mostAuthor[blog.author]) {
//       mostAuthor[blog.author]++;
//     } else {
//       mostAuthor[blog.author] = 1;
//     }
//   });
//   console.log(mostAuthor);
//   let maxKey = "";
//   let maxValue = null;

//   for (const key in mostAuthor) {
//     if (maxValue === null || mostAuthor[key] > maxValue) {
//       maxKey = key;
//       maxValue = mostAuthor[key];
//     }
//   }
//   console.log(mostAuthor);
//   return {
//     name: `${maxKey}`,
//     blogs: `${maxValue}`,
//   };
// };

// console.log(mostBlogs(listWithOneBlog));

//  Question #61  Define a function called mostLikes that receives an array of blogs as its parameter. The function returns the author, whose blog posts have the largest amount of likes. The return value also contains the total number of likes that the author has received:
// {
//   author: "Edsger W. Dijkstra",
//   likes: 17
// }

// const listWithOneBlog = [
//   {
//     _id: "5a422a851b54a676234d17f7",
//     title: "React patterns",
//     author: "Michael Chan",
//     url: "https://reactpatterns.com/",
//     likes: 7,
//     __v: 0,
//   },
//   {
//     _id: "5a422aa71b54a676234d17f8",
//     title: "Go To Statement Considered Harmful",
//     author: "Edsger W. Dijkstra",
//     url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
//     likes: 5,
//     __v: 0,
//   },
//   {
//     _id: "5a422b3a1b54a676234d17f9",
//     title: "Canonical string reduction",
//     author: "Edsger W. Dijkstra",
//     url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
//     likes: 17,
//     __v: 0,
//   },
//   {
//     _id: "5a422b891b54a676234d17fa",
//     title: "First class tests",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
//     likes: 10,
//     __v: 0,
//   },
//   {
//     _id: "5a422ba71b54a676234d17fb",
//     title: "TDD harms architecture",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
//     likes: 0,
//     __v: 0,
//   },
//   {
//     _id: "5a422bc61b54a676234d17fc",
//     title: "Type wars",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
//     likes: 2,
//     __v: 0,
//   },
// ];
// const mostLikes = (blogs) => {
//   let mostLikesAuthor = {
//     author: "",
//     likes: null,
//   };
//   blogs.forEach((blog) => {
//     // console.log(blog);
//     if (blog["likes"] > mostLikesAuthor["likes"]) {
//       mostLikesAuthor["author"] = blog["author"];
//       mostLikesAuthor["likes"] = blog["likes"];
//     }
//   });

//   return mostLikesAuthor;
// };

// console.log(mostLikes(listWithOneBlog));

//  Question #62 Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string. For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string. As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'. If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// function firstNonRepeatingLetter(str) {

//   const lowerStr = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     const char = lowerStr[i];
//     const charCount = lowerStr.split(char).length - 1;
//     if (charCount === 1) {
//       return str[i];
//     }
//   }
//   return "";
// }

// console.log(firstNonRepeatingLetter("ssTtrreeSS"));
/* 
 Question #63  Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b are very large 

 For example, the last decimal digit of 9^7 is 9, since 9^7=4782696,You may assume that the input will always be valid. Also, please take 0^0 to be 1 */

// const lastDigit = function (str1, str2) {
//   const numberAsString = Math.pow(str1, str2).toString();
//   console.log(numberAsString);
//   const lastDigit = parseInt(
//     numberAsString.charAt(numberAsString.length - 1),
//     10
//   );

//   return lastDigit;
// };

// console.log(lastDigit(10, 10000000000));

// Question #64: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.  Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// const descendingOrder = (n) => {
//   n = String(n)
//     .split("")
//     .sort((a, b) => {
//       return b - a;
//     })
//     .join("");
//   return Number(n);
// };

// console.log(descendingOrder(42145));

// Question #65 In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// const filter_list = (x) => {
//   return x.filter((ele) => {
//     return typeof ele !== "string" ;
//   });
// };
// console.log(filter_list([1, "a", "b", 0, 15]));

// Question #66 Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// const name1 = (arr) => {
//   return arr.filter((ele) => {
//     return ele.length === 4 ? ele : null;
//   });
// };

// console.log(name1(["Ryan", "Kieran", "Mark"]));

// Question #67 The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.

// const count = (str) => {
//   if (str === "") {
//     return {};
//   }
//   let occur = {};
//   str.split("").forEach((ele) => {
//     !occur[ele] ? (occur[ele] = 1) : occur[ele]++;
//   });
//   return occur;
// };

// console.log(count("abcabc"));

// Question #68  Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering. Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// const number = (arr) => {
//   if (arr === null) {
//     return null;
//   }
//   return arr.map((ele, i) => {
//     return `${String(i + 1)}: `.concat(ele);
//   });
// };

// console.log(number(["a", "b", "c"]));

// Question #69  Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it! On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.

// const to24hourtime = (hour, minute, period) => {
//   const formatHour = hour.toString().padStart(2, "0");
//   const formatMinute = minute.toString().padStart(2, "0");

//   if (period === "pm") {
//     if (hour >= 12) {
//       return hour + `${formatMinute}`;
//     } else if (hour < 12) {
//       return `${hour + 12}` + `${formatMinute}`;
//     }
//   } else if (period === "am") {
//     if (hour >= 12) {
//       return `${hour - 12}`.toString().padStart(2, "0") + `${formatMinute}`;
//     } else if (hour < 12) {
//       return `${hour}`.toString().padStart(2, "0") + `${formatMinute}`;
//     }
//   }
// };

// console.log(to24hourtime(1, 0, "am"));

// Question #70 ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher. Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// rot13("test")=>"Test"
// rot13("grfg")=>"Grfg"

// function rot13(str) {
//   return str
//     .split("")
//     .map((ele) => {
//       if (/[a-zA-Z]/.test(ele)) {
//         const code = ele.charCodeAt(0);
//         if ((code >= 65 && code <= 77) || (code >= 97 && code <= 109)) {
//           return String.fromCharCode(code + 13);
//         } else {
//           return String.fromCharCode(code - 13);
//         }
//       } else {
//         return ele;
//       }
//     })
//     .join("");
// }

// console.log(rot13("Codewars"));

// Question #71 As a part of this Kata, you need to create a function that when provided with a triplet, returns the i of the numerical element that lies between the other two elements. The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the i of 2 in the input array is 0.

// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the i of 10 in the input array is 1.

// function gimme(triplet) {
//   let i = 0;
//   triplet.filter((ele, i) => {
//     if (ele !== Math.max(...triplet) && ele !== Math.min(...triplet)) {
//       i = i;
//     }
//   });
//   return i;
// }

// console.log(gimme([5, 10, 14]));

// Question #72 Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.

// function findShort(s) {
//   let smallest = 0;
//   s.split(" ").find((ele) => {
//     if (smallest === 0) {
//       smallest = ele.length;
//     } else {
//       if (ele.length < smallest) {
//         smallest = ele.length;
//       }
//     }
//   });
//   return smallest;
//   // console.log(Math.min(...s.split(" ").map((s) => s.length)));
// }

// findShort("Let's travel abroad shall we");

// Question #73 given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// function findOdd(A) {
//   let total = {};
//   A.forEach((ele) => {
//     if (!total[ele]) {
//       total[ele] = 1;
//     } else {
//       total[ele]++;
//     }
//   });

//   let me = 0;
//   for (let value in total) {
//     if (total[value] % 2 != 0) {
//       me = value;
//     }
//   }
//   return Number(me);
// }

// // const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// console.log(findOdd([0]));

// Question #74 Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//   return s
//     .split("")
//     .map((ele) => {
//       return ele != "!" ? ele : "";
//     })
//     .join("");
// }

// console.log(removeExclamationMarks("Hello World!"));

// Question #75 Given a string str, reverse it and omit all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// function reverseLetter(str) {
//   return str
//     .split("")
//     .map((ele) => {
//       if (/[a-zA-Z]/.test(ele)) {
//         return ele;
//       }
//     })
//     .reverse()
//     .join("");
// }
// console.log(reverseLetter("ab23c"));

// Question #76 Count the number of divisors of a positive integer n. Random tests go up to n = 500000.
// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

// function getDivisorsCnt(n) {
//   let total = 0;
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       total++;
//       if (i !== n / i) {
//         total++;
//       }
//     }
//   }
//   return total;
// }
// console.log(getDivisorsCnt(500000));

// Question #77 our task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(words) {
//   const getNumber = (s) => s.match(/\d+/g);
//   return words
//     .split(" ")
//     .sort((a, b) => getNumber(a) - getNumber(b))
//     .join(" ");
// }
// console.log(order("is2 Thi1s T4est 3a"));

// Question #78 You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. You can assume all values in the array are numbers.

// function smallEnough(a, limit) {
//   return a.every((ele) => ele <= limit);
// }
// console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));

// Question #79 if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// function solve(s) {
//   let lower = 0;
//   let Upper = 0;
//   s.split("").forEach((ele) => {
//     ele === ele.toLowerCase() ? lower++ : Upper++;
//   });

//   return Upper <= lower
//     ? s.toLowerCase()
//     : Upper > lower
//     ? s.toUpperCase()
//     : null;
// }
// console.log(solve("CODe"));

// Question #80 Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// function persistence(num) {
//   let count = 0;

//   while (num >= 10) {
//     num = Array.from(String(num), Number).reduce((a, b) => {
//       return a * b;
//     }, 1);
//     count++;
//   }

//   return count;
// }
// console.log(persistence(39));

// Question #81 The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers. The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used). If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// function checkExam(array1, array2) {
//   let marks = 0;
//   array1.forEach((ele, i) => {
//     ele === array2[i]
//       ? (marks += 4)
//       : array2[i] === ""
//       ? (marks += 0)
//       : ele != array2[i]
//       ? (marks -= 1)
//       : false;
//   });
//   return marks < 0 ? 0 : marks;
// }
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));

// Question #82 Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

// return word.replace(/[aeiou]/gi, "");

// function getCount(str) {
//   let count = 0;
//   str.split("").forEach((ele) => {
//     if (/[aeiou]/.test(ele)) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(getCount("abracadabra"));

// Question #83 Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed. For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {
//   return numbers
//     .sort((a, b) => {
//       return a - b;
//     })
//     .slice(0, 2)
//     .reduce((a, b) => {
//       return a + b;
//     }, 0);
// }
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

// Question #84 Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them. a and b will both be positive integers, and a will always be the first number in the operation, and b always the second. The four operators are "add", "subtract", "divide", "multiply". A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// function arithmetic(a, b, operator) {
//   return operator === "add"
//     ? a + b
//     : operator === "subtract"
//     ? a - b
//     : operator === "multiply"
//     ? a * b
//     : operator === "divide"
//     ? a / b
//     : null;
// }
// console.log(arithmetic(1, 2, "add"));

// Question #85 Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// function roundToNext5(n) {
//   return Math.ceil(n / 5) * 5;
// }

// console.log(roundToNext5(21));

// Question #86 You are going to be given an array of integers. Your job is to take that array and find an i N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no i that would make this happen, return -1. For example: Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the i 3, because at the 3rd position of the array, the sum of left side of the i ({1,2,3}) and the sum of the right side of the i ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the i 1, because at the 1st position of the array, the sum of left side of the i ({1}) and the sum of the right side of the i ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At i 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// I 0 is the place where the left side and right side are equal.

// function findEvenI(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let leftSum = arr.slice(0, i).reduce((a, c) => a + c, 0);
//     let rightSum = arr.slice(i + 1).reduce((a, c) => a + c, 0);

//     if (leftSum === rightSum) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findEvenI([20, 10, -80, 10, 10, 15, 35]));

// Question #87 Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr) {
//   return arr.filter((ele, i) => {
//     return i % 2 === 0 ? ele : null;
//   });
// }
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Question #88: A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known. He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66). His mother looks out of a window 1.5 meters from the ground. How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3
// - h = 3, bounce = 1, window = 1.5, result is -1
// (Condition 2) not fulfilled).

// function bouncingBall(h, bounce, window) {
//   if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//     let count = 0;
//     while (h > window) {
//       count += 1;
//       h = h * bounce;
//       count += 1;
//     }
//     return count - 1;
//   } else {
//     return -1;
//   }
// }
// console.log(bouncingBall(2, 0.5, 1));

// Question #89: Your job is to write a function which increments a string, to create a new string.If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number. the number 1 should be appended to the new string.
// Examples
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

// function incrementString(str) {
//   let arr = str.split(/([0-9]+)/).filter(Boolean);
//   console.log(arr);
//   if (/^\d+$/.test(arr)) {
//     let number = parseInt(arr[0]);
//     number++;
//     arr[0] = number.toString().padStart(arr[0].length, "0");
//     return arr.join("");
//   } else if (/\d$/.test(str)) {
//     let number = parseInt(arr[arr.length - 1]);
//     console.log(arr[arr.length - 1]);
//     number++;
//     arr[arr.length - 1] = number
//       .toString()
//       .padStart(arr[arr.length - 1].length, "0");
//     return arr.join("");
//   } else if (!/\d$/.test(str)) {
//     arr.push("1");
//     return arr.join("");
//   }
// }
// console.log(incrementString("fo99obar99"));

// Question #90: Complete the function which converts a binary number (given as a string) to a decimal number.
// function binToDec(bin) {
//   return bin
//     .split("")
//     .map((ele) => Number(ele))
//     .reduce((acc, curr, i) => {
//       return (acc += Math.pow(2, bin.length - i - 1) * curr);
//     }, 0);
// }
// console.log(binToDec("1001001"));

// Question #91: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers) {
//   return numbers
//     .split(" ")
//     .map((ele) => Number(ele))
//     .reduce(
//       (result, curr) => {
//         result[0] = Math.max(result[0], curr);
//         result[1] = Math.min(result[1], curr);
//         return result;
//       },
//       [-Infinity, Infinity]
//     )
//     .join(" ")
//     .toString();
// }
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");

// Question #92: Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order. Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// function flattenAndSort(array) {
//   let arr = [];
//   array.forEach((ele) => {
//     ele.forEach((ele2) => {
//       if (ele2 !== "") {
//         arr.push(ele2);
//       }
//     });
//   });
//   return arr.sort((a, b) => a - b);
// }
// console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

// Question #93:  Task In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// function wave(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       arr.push(
//         str
//           .split("")
//           .map((char, j) => (i === j ? char.toUpperCase() : char))
//           .join("")
//       );
//     }
//   }
//   return arr;
// }
// console.log(wave("two words"));

// Question #94: Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// function removeUrlAnchor(url) {
//   console.log(url.split("#")[0]);
//   return url.split("#");
// }
// console.log(removeUrlAnchor("www.codewars.com#about"));

// Question #95: Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// function nbDig(n, d) {
//   let arr = [];
//   let count = 0;
//   for (let i = 0; i <= n; i++) {
//     arr.push(i ** 2);
//   }
//   arr.forEach((n) => {
//     String(n)
//       .split("")
//       .forEach((m) => {
//         if (`${m}`.includes(`${d}`)) {
//           count++;
//         }
//       });
//   });
//   return count;
// }
// console.log(nbDig(10, 1));

// Question #96:Task Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// function removeSmallest(num) {
//   let min = Math.min(...num);
//   let index = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === min) {
//       index = i;
//       break;
//     }
//   }
//   return num.filter((n, i) => {
//     if (i !== index) {
//       return n;
//     }
//   });
// }
// console.log(removeSmallest([2, 2, 1, 2, 1]));

// Question #97: Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// function solution(nums) {
//   return !nums ? [] : nums.sort((a, b) => a - b);
// }
// console.log(solution([1, 2, 10, 50, 5]));

// Question #98: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// const uniqueInOrder = (arr) => {
//   let curr = 0;
//   if (typeof arr === "string") {
//     return arr.split("").filter((ele) => {
//       if (curr !== ele) {
//         curr = ele;
//         return ele;
//       }
//     });
//   } else {
//     return arr.filter((ele) => {
//       if (curr !== ele) {
//         curr = ele;
//         return ele;
//       }
//     });
//   }
// };
// console.log(uniqueInOrder("AAAABBBCCDAABBB"));

// Question #99: In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1. Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// function factorial(n) {
//   if (n < 0 || n > 12) {
//     throw new RangeError("The argument must be between 1 and 12.");
//   }
//   let num = 1;
//   for (let i = 1; i <= n; i++) {
//     num = i * num;
//   }
//   return num;
// }
// console.log(factorial(0));

// Question #100: In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// const alphabetPosition = (text) => {
//   text = text.toLowerCase();
//   let myObject = {};
//   for (let i = 0; i < 26; i++) {
//     myObject[String.fromCharCode(97 + i)] = i + 1;
//   }

//   let arr = "";
//   text.split("").filter((ele) => {
//     if (ele.match(/[a-z]/i)) {
//       // console.log(ele);
//       arr += myObject[ele] + " ";
//     }
//   });
//   console.log(typeof arr);
//   return arr.trim();
// };
// console.log(alphabetPosition("The narwhal bacons at midnight."));

// let o = {}; // o inherits object methods from Object.prototype
// o.x = 1; // and it now has an own property x.
// console.log(o);
// let p = Object.create(o); // p inherits properties from o and Object.prototype
// p.y = 2; // and has an own property y.
// console.log(p);
// let q = Object.create(p); // q inherits properties from p, o, and...
// q.z = 3; // ...Object.prototype and has an own property z.
// console.log(q);
// console.log(q.x + q.y); // => 3; x and y are inherited from o and p

// let unitcircle = { r: 1 }; // An object to inherit from
// let c = Object.create(unitcircle); // c inherits the property r
// c.x = 1;
// c.y = 1; // c defines two properties of its own
// c.r = 2; // c overrides its inherited property
// console.log(c);
// console.log(unitcircle); // => 1: the prototype is not affected

// Question #101: Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

// const reverseMiddle = (arr) => {
//   return arr.length % 2 === 0
//     ? arr.slice(arr.length / 2 - 1, arr.length / 2 + 1).reverse()
//     : arr
//         .slice(Math.floor(arr.length / 2) - 1, Math.floor(arr.length / 2) + 2)
//         .reverse();
// };
// console.log(reverseMiddle([1, 2, 3, 4, 5, 6, 7]));

// Question #102: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order.

// const arrayDiff = (a, b) => {
//   return a.filter((ele) => !b.includes(ele));
// };
// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// Question #103: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

// const validatePIN = (pin) => {
//   return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin)
//     ? true
//     : false;
// };
// console.log(validatePIN("1234"));

// Question #104: Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
// Note: You will always be given a non-empty list containing positive values.

// const sumOfMinimums = (arr) => {
//   return arr.reduce((acc, curr) => acc + Math.min(...curr), 0);
// };

// console.log(
//   sumOfMinimums([
//     [7, 9, 8, 6, 2],
//     [6, 3, 5, 4, 3],
//     [5, 8, 7, 4, 5],
//   ])
// );

// Question #105: Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 --> 5

// const sumDigits = (number) => {
//   return Math.abs(number)
//     .toString()
//     .split("")
//     .reduce((acc, curr) => acc + Number(curr), 0);
// };
// console.log(sumDigits(-99));

// Question #106: given an integral number, determine if it's a square number:
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// const isSquare = (n) => {
//   return Number.isInteger(Math.sqrt(n)) ? true : false;
// };
// console.log(isSquare(0));

// Question #107: Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Notes
// Array size is at least 1.
// rowWeights([13, 27, 49])  ==>  return (62, 27)

// function rowWeights(array) {
//   return [
//     array.reduce((acc, curr, i) => {
//       if (i % 2 === 0) {
//         return acc + curr;
//       } else {
//         return acc;
//       }
//     }, 0),
//     array.reduce((acc, curr, i) => {
//       if (i % 2 !== 0) {
//         return acc + curr;
//       } else {
//         return acc;
//       }
//     }, 0),
//   ];
// }

// console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]));

// Question #108: Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs. The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair. Example:
// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

// const solution = (pairs) => {
//   let str = "";
//   for (const key in pairs) {
//     str += `${key} = ${pairs[key] },`;
//   }
//   str = str.slice(0, -1);
//   return str;
// };
// console.log(solution({ a: 1, b: "2" }));

// Question #109: Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// Solution
// const sortByLength = (array) => {
//   return array.sort((a, b) => a.length - b.length);
// };
// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

// Question #110: Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// Solution
// const convertHashToArray = (hash) => {
//   return Object.entries(hash).sort();
// };

// console.log(
//   convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
// );

// Question #111: The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

// hammingWeight(10) // 1010  => 2
// hammingWeight(21) // 10101 => 3
// The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)

//Solution
// const hammingWeight = (x) => {
//   let binary = [];
//   if (x === 1) {
//     return 1;
//   }
//   while (x > 1) {
//     binary.push(x % 2);
//     x = Math.floor(x / 2);
//     if (x === 1) {
//       binary.push(x);
//       binary.reverse();
//     }
//   }
//   return binary.filter((ele) => ele === 1).length;
// };
// console.log(hammingWeight(1));

// Question #112: Is every value in the array an array? This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
// Examples:
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false
//Solution
// const arrCheck = (value) => {
//   return value.every((ele) => {
//     return Array.isArray(ele) ? true : false
//   })
// }
// console.log(arrCheck(['1', '2']))

// Question #113: You are given an array of arrays. Inside of the interior arrays are numbers. Join the arrays together by descending total array value ending up with one final array.
// Simple example:
// cantBeatSoJoin([[1,2], [3,4], [5,6], [7,8], [9]]) -> [7, 8, 5, 6, 9, 3, 4, 1, 2]

//solution
// function cantBeatSoJoin(numbers) {
//   return numbers
//     .sort(
//       (a, b) =>
//         b.reduce((tot, cur) => {
//           return tot + cur
//         }, 0) -
//         a.reduce((tot, cur) => {
//           return tot + cur
//         }, 0),
//     )
//     .flat()
// }
// console.log(
//   cantBeatSoJoin([
//     [45, 64],
//     [43, 17],
//     [13, 37],
//     [1, 9],
//     [2, 3],
//   ]),
// )

// Question #114: Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests. Don't round the numbers! Just cut them after two decimal places!
// Right examples:
// 32.8493 is 32.84
// 14.3286 is 14.32

//Solution
// function twoDecimalPlaces(number) {
//   return Number(
//     String(number).split('.')[0] +
//       '.' +
//       String(number).split('.')[1].slice(0, 2),
//   )
// }
// console.log(twoDecimalPlaces(10.1289767789))

// Question #115: You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it?? Well here's the twist. The inputs will gradually increase with their index as parameter to the function.

// add(3,4,5);
// returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26*/

// solution:
// function add(...number) {
//   return number.reduce((tot, cur, i) => {
//     return tot + cur * (i + 1)
//   }, 0)
// }
// console.log(add(100, 200, 300))

// Question #116: You will get an array of numbers. Every preceding number is smaller than the one following it. Some numbers will be missing, for instance:

// [-3,-2,1,5] missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:
// [-1,0,2,3,4]

//solution:
// function findMissingNumbers(arr) {
//   const range = Array.from(
//     { length: Math.max(...arr) - Math.min(...arr) + 1 },
//     (_, i) => Math.min(...arr) + i,
//   )

//   return range.filter((ele) => {
//     if (!arr.includes(ele)) {
//       console.log(ele)
//       return ele !== undefined
//     }
//   })
// }
// console.log(findMissingNumbers([-3, -2, 1, 5]))

// Question #117: I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50. Example
// n = 3, so I expect a 3x3 square back just like below as a string:
// +++
// +++
// +++

//solution:
// const generateShape = (integer) => {
//   let out = ''
//   for (let i = 1; i <= integer; i++) {
//     i !== integer
//       ? (out += '+'.repeat(integer) + '\n')
//       : (out += '+'.repeat(integer))
//   }
//   return out
// }
// console.log(generateShape(8))

// Question #118: Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number. Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

// Solution:
// const sumTriangularNumbers = (n) => {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(i+j)
//     }
//   }
//   console.log(Array.from({ length: n }, (_, i) => i + 1))
//   const range = Array.from({ length: n }, (_, i) => i + 1).reduce(
//     (tot, cur, j) => {
//       //   if (cur % 2) {
//       console.log(j)
//       return tot + cur
//       //   }
//     },
//   )
//   console.log(range)
// }
// console.log(sumTriangularNumbers(8))

// Question #119: In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices. The first element of the array is at index 0.

//solution
// function total(arr) {
//   return arr.reduce((acc, curr, i) => {
//     if (i <= 1) return acc;
//     for (let j = 2; j < i; j++) if (i % j === 0) return acc;
//     return acc + curr;
//   }, 0);
// }

// console.log(total([1, 2, 3, 4, 5, 6]));

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else if (!(i % 3 === 0) && !(i % 5 === 0)) {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(25);

// Question #120: Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition. The binary number returned should be a string. Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//solution:

// function addBinary(a, b) {
//   let sum = a + b;
//   let binary = '';
//   while (sum > 0) {
//     binary += sum % 2;
//     sum = Math.floor(sum / 2);
//   }
//   return binary.split('').reverse().join('');
// }

// console.log(addBinary(13, 1));

// Question #121:

// var removeDuplicates = function (nums) {
//   let set = new Set(nums);

//   let a = [1, 2];
//   let b = [1, 2];
//   let array = Array.from(set);
//   let map = new Map();
//   for (let i = 0; i < nums.length - set.size; i++) {
//     array.push(String.fromCharCode(95));
//   }
//   console.log(array);
// };
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Question #121: Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

// solution:

// function saleHotdogs(n) {
//   return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : n >= 10 ? 90 * n : '0';
// }
// console.log(saleHotdogs(10));

// Question #122:  Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// solution:
// const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
//   return enteredCode === correctCode &&
//     Date.parse(currentDate) <= Date.parse(expirationDate)
//     ? true
//     : false;
// };

// console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));

// Question #123: Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// solution
// const capitals = function (word) {
//   let orderedList = [];
//   word.split('').forEach((a, i) => {
//     if (a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) {
//       orderedList.push(i);
//     }
//   });
//   return orderedList;
// };

// console.log(capitals('CodEWaRs'));

// Question #124: The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

//solution

// function duplicateEncode(word) {
//   let alpha = {};
//   let newString = '';
//   word = word.toLowerCase();
//   for (let char of word) {
//     alpha[char] = (alpha[char] || 0) + 1;
//   }

//   word.split('').forEach((ele) => {
//     if (alpha[ele] === 1) {
//       newString = newString.concat('(');
//     } else {
//       newString = newString.concat(')');
//     }
//   });

//   return newString;
// }

// console.log(duplicateEncode('rEcede'));

// Question #125: Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// solution
// function longest(s1, s2) {
//   const combinedSet = new Set([...s1, ...s2]);
//   return [...combinedSet].sort().join('');
// }

// console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'));

// Question #126: Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// solution
// function towerBuilder(nFloors) {
//   let array = [];
//   const totalWidth = 2 * nFloors - 1;
//   for (let i = 0; i < nFloors; i++) {
//     let str = '*'.repeat(2 * i + 1);
//     let paddedStr = str
//       .padStart((totalWidth - str.length) / 2 + str.length)
//       .padEnd(totalWidth);
//     array.push(paddedStr);
//   }
//   return array;
// }

// console.log(towerBuilder(5));

// Question #127: Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications
// minValue({5, 7, 5, 9, 7})  ==> return (579)
// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

// solution
// function minValue(values) {
//   const mySet = new Set(values);
//   const myArray = Array.from(mySet);
//   return parseInt(myArray.sort().join(''));
// }
// console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]));

// Question #128: Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).
// (You can mutate the input if you want, but it is a better practice to not mutate the input)

// Example:
// Input array
// [
//   [-1,  4, -5, -9,  3 ],
//   [ 6, -4, -7,  4, -5 ],
//   [ 3,  5,  0, -9, -1 ],
//   [ 1,  5, -7, -8, -9 ],
//   [-3,  2,  1, -5,  6 ]
// ]
// Output array
// [
//   [ 0,  4, -5, -9,  3 ],
//   [ 6,  0, -7,  4, -5 ],
//   [ 3,  5,  1, -9, -1 ],
//   [ 1,  5, -7,  0, -9 ],
//   [-3,  2,  1, -5,  1 ]
// ]

// solution
// function matrix(array) {
//   array.map((arr, i) => {
//     arr[i] < 0 ? (arr[i] = 0) : arr[i] >= 0 ? (arr[i] = 1) : arr[i];
//   });
//   return array;
// }

// console.log(
//   matrix([
//     [-1, 4, -5, -9, 3],
//     [6, -4, -7, 4, -5],
//     [3, 5, 0, -9, -1],
//     [1, 5, -7, -8, -9],
//     [-3, 2, 1, -5, 6],
//   ]),
// );

// Question #129: For example:
// matrix:
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]

// principal diagonal: [1, 5, 9]
// secondary diagonal: [3, 5, 7]
// Task
// Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.

// If the principal diagonal is larger, return "Principal Diagonal win!"
// If the secondary diagonal is larger, return "Secondary Diagonal win!"
// If they are equal, return "Draw!"
// Note: You will always receive matrices of the same dimension.

// solution:

// function diagonal(matrix) {
//   let principalDiagonal = matrix.reduce((acc, curr, i) => {
//     return curr[i] + acc;
//   }, 0);

//   let secondaryDiagonal = matrix.reduce((acc, curr, i) => {
//     return curr[matrix.length - 1 - i] + acc;
//   }, 0);

//   return principalDiagonal > secondaryDiagonal
//     ? 'Principal Diagonal win!'
//     : principalDiagonal < secondaryDiagonal
//     ? 'Secondary Diagonal win!'
//     : 'Draw!';
// }
// console.log(
//   diagonal([
//     [2, 2, 2],
//     [4, 2, 6],
//     [1, 8, 2],
//   ]),
// );

// Question #130: Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TO

// String.prototype.toAlternatingCase = function () {
//   return this.split('')
//     .map((c) =>
//       c >= 'a' && c <= 'z' ? c.toUpperCase() : c >= 'A' && c <= 'Z' ? c.toLowerCase() : c,
//     )
//     .join('');
// };

// '1a2b3c4d5E'.toAlternatingCase();

// Question #131: Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even. For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples. The input will be a lowercase string with no spaces.

// function capitalize(s) {
//   const chars = [...s];
//   return [
//     chars.map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c)).join(''),
//     chars.map((c, i) => (i % 2 !== 0 ? c.toUpperCase() : c)).join(''),
//   ];
// }
// capitalize('abcdef');

// Question #132:  Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// solution
// function domainName(url) {
//   return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
// }

// domainName('https://youtube.com');

// Question #133:  Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// solution
// function replace(s) {
//   return s
//     .split('')
//     .map((a) => ('aeiou'.includes(a.toLocaleLowerCase()) ? '!' : a))
//     .join('');
// }

// replace('ABCDE');

// Question #134:  The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> ""
// ("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

//solution
// function revrot(str, sz) {
//   if (sz <= 0 || str == '' || sz > str.length) {
//     return '';
//   }
//   let chunks = [];
//   for (let i = 0; i < str.length; i += sz) {
//     let chunk = str.split('').slice(i, i + sz);

//     if (chunk.length >= sz) {
//       // prettier-ignore
//       if ( chunk.reduce((acc, curr) => Number(curr) + acc, 0) % 2 === 0)
//     {
//       chunks.push(chunk.reverse().join(''));
//     }else {
//       chunk.push(chunk.shift())
//       chunks.push(chunk.join(''))
//     }
//     }
//   }
//   return chunks.join('');
// }

// revrot('563000655734469485', 4);

// Question #135: The number is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number:

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a,b] the function should output an empty list.
// 90, 100 --> []

// solution
// function sumDigPow(a, b) {
//   let eureka = [];
//   for (let i = a; i <= b; i++) {
//     let aa = i
//       .toString()
//       .split('')
//       .reduce((acc, curr, i) => Math.pow(Number(curr), i + 1) + acc, 0);
//     if (aa === i) {
//       eureka.push(i);
//     }
//   }
//   return eureka;
// }
// sumDigPow(10, 150);

// Question #136: You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions: Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// solution
// const encryptThis = function (text) {
//   return text
//     .split(' ')
//     .map((word) => {
//       const firstLetter = word.charCodeAt(0);
//       const chunk = word.slice(1).split('');
//       if (chunk.length > 1) {
//         [chunk[0], chunk[chunk.length - 1]] = [chunk[chunk.length - 1], chunk[0]];
//       }
//       return firstLetter + chunk.join('');
//     })
//     .join(' ');
// };

// encryptThis('');

//Question #137:  Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2). For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted. The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

// solution
// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
// twoSum([3, 2, 4], 6);

//Question #138: Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array. You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2. The array will always contain letters in only one case.

// Example:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// solution;
// function findMissingLetter(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i + 1].charCodeAt() - array[i].charCodeAt() > 1) return String.fromCharCode(array[i].charCodeAt() + 1);
//   }
// }
// findMissingLetter(['a', 'b', 'c', 'd', 'f']);

// Question #139: Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

//solution
// const inArray = (a1, a2) => {
//  return a1.filter((ele) => a2.some((ele2) => ele2.includes(ele))).sort();
// };

// a1 = ['live', 'strong', 'arp'];
// a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
// inArray(a1, a2);

// Question #140: Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this

// solution
// const countBits = (b) => {
//   const bits = [];
//   while (b > 0) {
//     bits.unshift(b % 2);
//     b = Math.floor(b / 2);
//   }
//   return bits.filter((bit) => bit === 1).length;
// };
// countBits(1234);

// Question #141:  Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// solution
// function pigIt(str) {
//   return str
//     .split(" ")
//     .map((w) =>
//       w.match(/[.,?!:;'"\(\)—\-…\[\]\{\}]/g)
//         ? w
//         : w.split("").slice(1).join("") + w[0] + "ay"
//     )
//     .join(" ");
// }

// pigIt("Pig latin is cool");

// Question #142: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// solution
// function createPhoneNumber(numbers) {
//   return numbers
//     .map((ele, i) =>
//       i === 0
//         ? `(${ele}`
//         : i === 2
//         ? `${ele})`
//         : i === 3
//         ? ` ${ele}`
//         : i === 5
//         ? `${ele}-`
//         : `${ele}`
//     )
//     .join("");
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// Question #143: Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
// solutions
// const addProperty = (questions) => {
//   questions.forEach((q) => (q.usersAnswer = null));
//   console.log(questions);
// };

// addProperty([
//   {
//     question: "What's the currency of the USA?",
//     choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
//     corAnswer: 0,
//   },
//   {
//     question: 'Where was the American Declaration of Independence signed?',
//     choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
//     corAnswer: 0,
//   },
// ]);

// Question #144:  Create a function named divisors/Divisors that takes an integer n > 1 and
// returns an array with all of the integer's divisors(except for 1 and the number itself),
// from smallest to largest. If the number is prime return the string '(integer) is prime'

// function divisors(integer) {
//   let divisors = [];
//   for (let i = 2; i <= integer - 1; i++) {
//     if (integer % i === 0) {
//       divisors.push(i);
//     }
//   }
//   return divisors.length === 0 ? `${integer} is prime` : divisors;
// }

// divisors(13);

// Question #145: Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime. Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;

//   // No even number other than 2 is prime
//   if (num % 2 === 0) return false;

//   const sqrt = Math.sqrt(num);
//   for (let i = 3; i <= sqrt; i += 2) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// Question #146: Most Frequent Character  Identify the character that appears most frequently in a string.
// If there are multiple characters that appear the same number of times, return the one that appears first in the string.

// const mostFrequestChar = (str) => {
//   let counts = {};
//   str.split('').forEach((char) => {
//     counts[char] = (counts[char] || 0) + 1;
//   });

//   let maxKey = null;
//   let maxValue = null;

//   Object.entries(counts).forEach(([key, value]) => {
//     if (value > maxValue) {
//       maxValue = value;
//       maxKey = key;
//     }
//   });
//   return maxKey;
// };

// console.log(mostFrequestChar('abbccd'));

// Question #147:  The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// solution1
// function generateHashtag(str) {
//   if (str.trim().length === 0) {
//     return false;
//   }

//   str = str.toLowerCase().trim().replace(/ {2,}/g, ' ');
//   let newString = (/ {2,}/.test(str) ? str.split(/ {2,}/) : str.split(' '))
//     .filter((a) => a !== '')
//     .map((a) =>
//       a
//         .split('')
//         .map((b, i) => (i === 0 ? b[i].toUpperCase() : b))
//         .join('')
//     );
//   newString.unshift('#');
//   return newString.join('').length > 140 ? false : newString.join('');
// }

// solution  2
// function generateHashtag(str) {
//   if (str.trim().length === 0) {
//     return false;
//   }

//   let finalString = str.split(' ').reduce((total, cur) => {
//     return total + cur.charAt(0).toUpperCase() + cur.substring(1);
//   }, '#');

//   return finalString.length > 140 ? false : finalString;
// }

// console.log(generateHashtag('oav sbrt r  qdb pwge ojler  equ'));

// Question #148: Write a function in JavaScript that takes a string as input and returns
// a new string with only the first occurrence of each letter, preserving the
// original order and ignoring case (but keeping the original case in output).

// const removeDuplicates = (str) => {
//   const seen = new Set();
//   let result = '';
//   str.split('').forEach((a) => {
//     if (!seen.has(a)) {
//       seen.add(a);
//     }
//     result += a;
//   });
//   return result;
// };
// console.log(removeDuplicates('AaBbCc'));

//Question #149:  Find the Most Frequent Character. Return the character that appears most frequently in the string.

// const mostFrequestFinder = (str) => {
//   const result = str.split('').reduce((final, char) => {
//     !final[char] ? (final[char] = 1) : final[char]++;
//     return final;
//   }, {});

//   let maxChar = '';
//   let maxNumber = 0;

//   for (const [key, value] of Object.entries(result)) {
//     if (value > maxNumber) {
//       maxNumber = value;
//       maxChar = key;
//     }
//   }
//   return maxChar;
// };

// console.log(mostFrequestFinder('javassscript'));

// Question #150: Sentence Calculator
// Calculate the total score (sum of the individual character scores) of a sentence given
// the following score rules for each allowed group of characters:

// Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
// Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
// Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
// Other characters: 0 value
// Note: input will always be a string

// solution:
// function lettersToNumbers(s) {
//   s = s.split(' ').join('');
//   let all = {};
//   [...'abcdefghijklmnopqrstuvwxyz'].forEach((a, i) => {
//     all[a] = i + 1;
//   });
//   [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].forEach((a, i) => {
//     all[a] = i * 2 + 2;
//   });
//   [...'0123456789'].forEach((a, i) => {
//     all[a] = i;
//   });
//   let total = 0;

//   s.split('').forEach((a) => {
//     if (Object.hasOwn(all, a)) {
//       total += all[a];
//     }
//   });
//   return total;
// }
// console.log(lettersToNumbers('Give me five!'));

// Question #151:  A pangram is a sentence that contains every single letter of the alphabet at least once. For example,
// the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string) {
//   const onlyAlphabet = string
//     .split(' ')
//     .join('')
//     .split('')
//     .filter((char) => {
//       return char.toLowerCase() !== char.toUpperCase();
//     })
//     .map((m) => m.toLowerCase());

//   return 'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every((a) => onlyAlphabet.includes(a));
// }

// console.log(isPangram('This is not a pangram.'));

// Question #152: Write a method (or function, depending on the language) that converts a string to camelCase, that is,
// all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

//solution1
// String.prototype.camelCase = function () {
// return this.split(' ')
//   .map((w) => {
//     return w
//       .split('')
//       .map((x, i) => {
//         return i === 0 ? x.toUpperCase() : x;
//       })
//       .join('');
//   })
//   .join('');
// };

// solution 2
// String.prototype.camelCase = function () {
//   return this.split(' ')
//     .map((w) => {
//       return w.charAt(0).toUpperCase() + w.slice(1);
//     })
//     .join('');
// };

// console.log('camel Case method'.camelCase());

// Question #153: Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8

// solution
// function rowSumOddNumbers(n) {
//   let odd = 1;
//   let lastLoopTot = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (i === n) {
//         lastLoopTot += odd;
//       }
//       odd += 2;
//     }
//   }
//   return lastLoopTot;
// }
// rowSumOddNumbers(42);

// Question #153: Usually when you buy something, you're asked whether your credit card number, phone number or answer
// to your most secret question is still correct. However, since someone could look over your shoulder,
// you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// function maskify(cc) {
//   cc = cc.split(' ').join('');
//   return cc.length <= 1
//     ? cc
//     : cc
//         .split('')
//         .map((n, i) => (cc.length - i <= 4 ? n : '#'))
//         .join('');
// }

// console.log(maskify('1232222lweh89745873!!!'));


// Question #154: Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

// solution
// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0 ? true : false;
// }
// console.log(isDivisible(3, 3, 4));;
