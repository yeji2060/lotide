const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) == true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
   if(str[i] !== " ") {
     const letter = str[i];
     if (result[letter]) {
      result[letter].push(i);
     }else {
      const arr = [];
      arr.push(i);
      result[letter] = arr;
     }
   }
  }
  return result;
}

console.log(letterPositions("Lighthouse in the house"));