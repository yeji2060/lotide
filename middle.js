const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
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

const middle = function(arr) {
  let result = [];
  if (arr.length == 1 || arr.length == 2) {
    return result;
  } else if (arr.length % 2 == 1) {
    let midNum = Math.floor(arr.length / 2);
    result.push(arr[midNum]);
    return result;
  } else {
    let midNum_1 = (Math.floor(arr.length / 2)) - 1;
    result.push(arr[midNum_1]);
    let midNum_2 = (Math.floor(arr.length / 2));
    result.push(arr[midNum_2]);
    return result;
  }

}

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

