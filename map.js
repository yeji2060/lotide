const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const words1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(words1, word => word[0]);
console.log(assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]));

const words2 = ["yeji", "ha", "for", "the", "test"];
const results2 = map(words2, word => word[0]);
console.log(assertArraysEqual(results2,[ 'y', 'h', 'f', 't', 't' ]));

const words3 = ["lighthouse", "lab", "practice"];
const results3 = map(words3, word => word[0]);
console.log(assertArraysEqual(results3,[ 'l', 'l', 'p']));

