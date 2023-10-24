const args = process.argv;
let arr = args.slice(2);

  if (arr[0].length !== arr[1].length) {
    return console.log("false");
  }
  
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] !== arr[1][i]) {
      return console.log("false");
    }
  }
  return console.log("true");
