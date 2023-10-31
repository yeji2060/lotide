const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
   const result = {};
   for (let i = 0; i < str.length; i++) {
    if(str[i] !== " ") {
      const letter = str[i].toLowerCase()
      result[letter] ? result[letter] += 1 : result[letter] = 1
      // if(result[letter]) {
      //   result[letter] += 1
      // } else {
      //   result[letter] = 1
      // } 
    }
   }
   return result;
}

console.log(countLetters("Hello World"));s