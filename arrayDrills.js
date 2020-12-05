  /* 5. URLify a string
  A common mistake users make when they type in an URL is to put spaces between words or letters. 
  A solution that developers can use to solve this problem is to replace any spaces with a %20. 
  Write a method that takes in a string and replaces all its empty spaces with a %20. 
  Your algorithm can only make 1 pass through the string. 
  Examples of input and output for this problem can be
  Input: tauhida parveen
  Output: tauhida%20parveen
  Input: www.thinkful.com /tauh ida parv een
  Output: www.thinkful.com%20/tauh%20ida%20parv%20een */

  function urlify(url) {
    return url.split(' ').join('%20');
  }
  
  // console.log(urlify('tauhida parveen'));
  // console.log(urlify('www.thinkful.com / tauh ida parv een'));

  /* 6. Filtering an array
  Imagine you have an array of numbers. 
  Write an algorithm to remove all numbers less than 5 from the array. 
  DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.*/

  function filterArray(array) {
      let answerArray = [];

      for (let i = 0; i < array.length; i++) {
          if (array[i] >= 5)
                answerArray.push(array[i]);
      }

      return answerArray
  }

  // console.log(filterArray([4, 3, 5, 6, 1]));

  /* 7. Max sum in the array
  You are given an array containing positive and negative integers. 
  Write an algorithm which will find the largest sum in a continuous sequence.
  Input: [4, 6, -3, 5, -2, 1]
  Output: 12*/

  const array = [4, 6, -3, 5, -2, 1];
  function maxSum(array) {
  let number = 0;
  let nextNumber = 0;

  for (let i = 0; i < array.length; i++) {
    nextNumber = 0;
    for (let j = 0; j < array.length; j++) {
      nextNumber += array[j];
      if (nextNumber > number) {
        number = nextNumber;
      }
    }
  }
   return number;
  }

  // console.log(maxSum(array));

  /* 8. Merge arrays
  Imagine you have 2 arrays which have already been sorted. 
  Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.
  Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
  Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11] */

  // My Way
  const array1 = [1, 3, 6, 8, 11];
  const array2 = [2, 3, 5, 8, 9, 10];
  function mergeArray(array1, array2) {
    let result = [...array1, ...array2];
    result.sort(function(x, y) {
    return x - y;
    })
    console.log(result);
  }
  
  // console.log(mergeArray(array1, array2))

  // Brother's Way
  function mergeArr(arr1, arr2){
    return [...arr1, ...arr2].sort((a,b) => a - b);
  }
  
  // console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

  /* 9. Remove characters
  Write an algorithm that deletes given characters from a string. 
  For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", 
  the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.
  Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
  Output: 'Bttl f th Vwls: Hw vs. Grzny' */

  const sentence = 'Battle of the Vowels: Hawaii vs. Grozny';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  function removeLetter(sentence, vowels) {
    let newString = '';
    for (let i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i])) {
        newString += sentence[i];
      }
    }
    return newString;
  }
  // console.log(removeLetter(sentence, vowels));