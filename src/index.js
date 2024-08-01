module.exports = function check(str, bracketsConfig) {
  // let a = 0;
  // for (let i of str) {
  //   for (let k of bracketsConfig) {
  //     if (i == k[0]) {
  //       a++;
  //     }
  //     if (i == k[1]) {
  //       a--;
  //     }
  //     if (a < 0) {
  //       return false;
  //     }
  //   }
  //   // if()
  // }
  // return true;
  // let stack = [];
  // let OPEN_BRACKETS = [];
  // for (let i = 0; i < bracketsConfig.length; i++) {
  //   OPEN_BRACKETS.push(bracketsConfig[i][0]);
  //   console.log(bracketsConfig[i][0]);
  // }

  // for (let i = 0; i < str.length; i++) {
  //   let currentSymbol = str[i];

  //   if (OPEN_BRACKETS.includes(currentSymbol)) {
  //     stack.push(currentSymbol);
  //   } else {
  //     if (stack.length === 0) {
  //       return false;
  //     }
  //   }
  // }
  // return stack.length === 0;
  // if (matrix == undefined) {
  //   return [];
  // }
  // let towelSortArr = [];
  
  // for ( let i = 0; i < matrix.length; i++)
  // if (i % 2 === 0) {
  //  for( let j = 0; j < matrix[i].length; j++){
  //   towelSortArr.push( matrix[i][j]);
  //  }}
  //  else {
  //   for (let j = (matrix[i].length - 1); j >= 0; j--) {
  //     towelSortArr.push(matrix[i][j]);
  //   }
  // }
  // return towelSortArr;

  let OPEN_BRACKETS = [];
  let BRACKETS_PAIR = {};
 // Перерешай !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  let stack = [];
 // Перерешай !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  for(let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
// Перерешай !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (OPEN_BRACKETS.includes(currentSymbol)) {
      if ((stack[stack.length - 1] === currentSymbol) && (BRACKETS_PAIR[currentSymbol] === currentSymbol)) {
        stack.pop();
      }
    else {
      stack.push(currentSymbol)
    }
   }
    else {
      if (stack.length === 0) {
        return  false;
      }
      let topElement = stack[stack.length - 1];
// Перерешай !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// Перерешай !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
