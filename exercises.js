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
    }
    module.exports = upperCaser

//     # Task
//
// Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
//
// Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.
//
// ## Arguments
//
//   * operation: A Function, takes no arguments, returns no useful value.
//   * num: the number of times to call `operation`
//
// ## Resources
//
//   * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
//
// ## Hints
//
//   * Don't overthink it, the code should be rather simple.
//   * It's ok to use a loop in your implementation, bonus points if you use recursion instead.
//   * You may notice some output. That is coming from the function we passed you.
//   * You do not need to console.log anything.
//
// ## Boilerplate

    function repeat(operation, num) {
      if (num <= 0){
        return operation()
      } else {
        return repeat(operation, --num)
      }
    }

    // Do not remove the line below
    module.exports = repeat


    // # Task
    //
    // Convert the following code from a for-loop to Array#map:
    //
    //     function doubleAll(numbers) {
    //       var result = []
    //       for (var i = 0; i < numbers.length; i++) {
    //         result.push(numbers[i] * 2)
    //       }
    //       return result
    //     }
    //
    //     module.exports = doubleAll

    function doubleAll(numbers) {
      return numbers.map(number => number * 2)
    }

    module.exports = doubleAll

//     # Task
//
// Use Array#filter to write a function called getShortMessages.
//
// getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.
//
// The function should return an array containing the messages themselves, without their containing object.
    function getShortMessages(messages) {
      return messages.map(message => message.message).filter((message) => {
        return message.length < 50;
      });
    }

    module.exports = getShortMessages

//     # Task
//
// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.
//
// You only need to check that the ids match.

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((sUser) => {
      return goodUsers.some((gUser) => {
        return sUser.id = gUser.id;
      })
    })
  };
}


  module.exports = checkUsersValid


//   # Task
//
// Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

function countWords(inputWords) {
   return inputWords.reduce((words, word) => {
     if (word in words){
       words[word]++;
     } else {
       words[word] = 1;
     }
     return words;
   }, {});
 }

 function countWords(inputWords) {
    return inputWords.reduce((words, word) => {
      words[word] = ++words[word] || 1;
      return words;
    }, {});
  }

  function countWords(inputWords) {
     return inputWords.reduce((words, word) => {
       word in words ? words[word]++ : words[word] = 1;
       return words;
     }, {});
   }
 module.exports = countWords
