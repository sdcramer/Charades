// CHALLENGE #1
// Write a function called ‘sorter’ that sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// numArray = [5, 8, 3, -7, 0, 8, -12]
// sorter(numArray) should return [-12, -7, 0, 3, 5, 8, 8]
// extra credit to remove any duplicate numbers in the solution

const numArray = [5, 9, 7, 6, 9, 10, 8, 8];

const sorted = (array) => {
  return array
    .sort((a, b) => a - b)
    .filter((value, numCycle) => array.indexOf(value) === numCycle);

  //                         //  0  1  2  3  4  5  6  7
  // console.log(sortedArray)
  // const deDupedArray = new Map(sortedArray);
  // deDupedArray.forEach((value) => console.log(value * 100))
};
sorted(numArray);

console.log(sorted(numArray));

// CHALLENGE #2
// Write a function called ‘arrange’ that will sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.
// initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]
// arrange(initialArray, sortingArray) should return ['y', 'z', 'x']

//                    0  1  2
const sortingArray = [1, 2, 0];
//                     0    1    2
const initialArray = ["x", "y", "z"];

// x = 2
// y = 0
// z = 1

// value of index from sortingArray === the indexOf of value from initialArray

const arrange = (array1, array2) => {
  let newArray = [];
  array1.forEach((element) => {
    newArray.push(array2[element]);
  });
  return console.log(newArray);
};

arrange(sortingArray, initialArray);

// CHALLENGE #3
// Write a function that returns the url with anything after the anchor (#) removed.
// www.sams-mvp-charades.com#about ⇒ www.sams-mvp-charades.com
// www.sams-mvp-charades.com?page=1 ⇒ www.sams-mvp-charades.com?page=1

const truncateUrl = (url) => {
  const newShortenedUrl = url.split("#")[0];
  return console.log(newShortenedUrl);
};

truncateUrl("WWW.SAMS-MVP-CHARADES.COM#ABOUT");

// www.sams-mvp-charades.com#about
// WWW.SAMS-MVP-CHARADES.COM#ABOUT

// CHALLENGE #4
// Write a function called ‘vowel2index’ that takes a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:
// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''

const vowel2Index = (string) => {
  return string.replace(/[aeiou]/gi, (vowel, offset) => offset);
};

console.log(vowel2Index("this is my string"));

// CHALLENGE #5
// Implement a function called 'triangle' that takes a parameter of 'n'
// And returns the total number of stars in that equilateral triangle
// triangle(5) returns 15
// n=5 total stars: 15
//        *
//       * *
//      * * *
//     * * * *
//    * * * * *

// 0 = *
// 1 = * *
// 2 = * * *
// 3 = * * * *
// 4 = * * * * *

const triangle = (num) => {
  let stars = [];
  let totalStars = 0;

  for (let i = 0; i < num; i++) {
    stars.push(i + 1);
  }

  for (let i = 0; i < stars.length; i++) {
    totalStars += stars[i];
  }
  return totalStars;
};

console.log(triangle(5));

const triangle2 = (num) => {
  let stars = [];
  let totalStars = 0;

  for (let i = 0; i < num; i++) {
  
    stars.push(i + 1)
    console.log(stars);
  }
 return totalStars = stars.reduce((a,b) => a + b )
  
};

console.log(triangle2(3));



