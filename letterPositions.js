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