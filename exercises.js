// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.
//
// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

function validPhoneNumber(phoneNumber){
  let count = 0;
  for (let i=0; i < phoneNumber.length; i++){
    if (phoneNumber.match(/\d/)){
      count++
    }
  }
  return (phoneNumber[0] === '('
    && phoneNumber[4] === ')'
    && phoneNumber[5] === ' '
    && phoneNumber[9] === '-'
    && count === 14
  )
}

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  let minMaxArr = [];
  arr.sort((a,b) => a-b);
  minMaxArr.push(arr[0]);
  minMaxArr.push(arr[arr.length-1]);
  return minMaxArr;
}

function minMax(arr){
  arr.sort((a,b) => a-b);
  return [arr[0], arr[arr.length-1]];
}

function minMax(arr){
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}

// # Task

// Write a function that takes an input string and returns it uppercased.
//
// ## Arguments
//
//   * input: a String of random words (lorem ipsum).
//
// ## Boilerplate

    function upperCaser(input) {
      return input.split('').map(letter => letter.toUpperCase()).join('');
      // let capitalized = [];
      // for (let letter of input){
      //   capitalized.push(letter.toUpperCase())
      // }
      // return capitalized.join('');
    }
    module.exports = upperCaser
