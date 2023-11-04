const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length == Object.keys(object2).length) {
    for(let keys in Object.keys(object1)) {
      if(object1[keys] !== object2[keys]) {
        console.log("Here");
        return false;
      }
      if(Array.isArray(object1[keys])) {
        if (eqArrays(object1[keys], object2[keys]) == false) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

}

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false