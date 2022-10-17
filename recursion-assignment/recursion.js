/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));}

/** longest: return the length of the longest word in an array of words. */

//   longest(["hello", "hi", "hola"])

function longest(words) {
  let longest = 0;
          function _longest(words,i){
              if(i === words.length) return;
              if (words[i].length > longest){
                longest = words[i].length
              }
              _longest(words,i+1)
          }
  _longest(words,0);
  return longest;
}

/** everyOther: return a string with every other letter. */
//    everyOther("hello")  // "hlo"
function everyOther(str, i=0) {

  if(i === str.length) return '';

  if(i % 2 === 0) return str[i] + everyOther(str,i=i+1);

  return everyOther(str, i=i+1);}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str,i=0) {
  let last = str.length-1;


  if(str[i]!==str[last-i]) return false;
  if(i > last-i) return true;
  
  return isPalindrome(str,i=i+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val ,i=0) {

  if(i === arr.length) return -1;

  if(arr[i] === val) return i;

  return findIndex(arr,val,i=i+1);
}
// hello
// anna
/** revString: return a copy of a string, but in reverse. */

function revString(str,i=0) {
  let last = str.length-1;

  if(i === str.length) return '';


  return str[last-i] + revString(str,i=i+1)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let out = [];
  function _gatherStrings(obj){
    for(key in obj){
      if(typeof obj[key] === 'string') out.push(obj[key]);
      if(typeof obj[key] === 'object') _gatherStrings(obj[key]);
    }
  }
  _gatherStrings(obj);
  return out;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
