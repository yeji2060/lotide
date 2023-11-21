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

module.exports = middle;
