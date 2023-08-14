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
//     .map((currentValue, index) => {
//       currentValue = currentValue.toUpperCase();
//       for (let i = 0; i < index; i++) {
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

// Question 29: Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']
// Output ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

// function sortArray(a1, a2) {
//   const sorted = [];
//   a1.forEach((_, index) => {
//     for (let i = 0; i < a1.length; i++) {
//       if (a2[i][0] === a1[index][0]) {
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
//   console.log(numbers.indexOf(1));
//   for (let num of numbers) {
//     // console.log(numbers.indexOf(num));
//     if (numbers.indexOf(num) === numbers.lastIndexOf(num)) {
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

//   array.forEach((number, index) => {
//     if (number % 2 === 0) {
//       numberIndices.push(index);
//       numbersToKeep.push(number);
//     }
//   });

//   // Remove the numbers from the array
//   numbersToKeep.forEach((number) => {
//     const index = array.indexOf(number);
//     if (index !== -1) {
//       array.splice(index, 1);
//     }
//   });

//   // Sort the remaining elements of the array
//   array.sort((a, b) => a - b);

//   // Insert the numbers back into the array at
//   numberIndices.forEach((index, i) => {
//     array.splice(index, 0, numbersToKeep[i]);
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
// const index1 = [];

// string.split("").filter((ele, index) => {
//   if (ele === ele.toUpperCase()) {
//     index1.push(index);
//   }
// });
// index1.forEach((ele, index) => {
//   const stringArray = string.split("");
//   stringArray.splice(ele + index, 0, " ");
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

// Q#46 We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num) {
//   return num.toString();
// }

// console.log(numberToString(25));
