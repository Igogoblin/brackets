// module.exports = function check(str, bracketsConfig) {
// let a = 0;
// for (let i of str) {
//   for (let k of bracketsConfig) {
//     if (i === k[0]) {
//       a++;
//     }
//     if (i === k[1]) {
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
// if (matrix === undefined) {
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

//   let OPEN_BRACKETS = [];
//   let BRACKETS_PAIR = {};

//   for (let i = 0; i < bracketsConfig.length; i++) {
//     OPEN_BRACKETS.push(bracketsConfig[i][0]);
//     BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
//   }
//   let stack = [];

//   for (let i = 0; i < str.length; i++) {
//     let currentSymbol = str[i];

//     if (OPEN_BRACKETS.includes(currentSymbol)) {
//       if (
//         stack[stack.length - 1] === currentSymbol &&
//         BRACKETS_PAIR[currentSymbol] === currentSymbol
//       ) {
//         stack.pop();
//       } else {
//         stack.push(currentSymbol);
//       }
//     } else {
//       if (stack.length === 0) {
//         return false;
//       }
//       let topElement = stack[stack.length - 1];

//       if (BRACKETS_PAIR[currentSymbol] === topElement) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };
// Решаю сам еще раз на всякий случай
module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  let rezult = [];
  for (let i = 0; i < str.length; i++) {
    // if (
    //   (str[i] === bracketsConfig[0][1] &&
    //     rezult[rezult.length - 1] !== bracketsConfig[0][0]) ||
    //   (bracketsConfig.length === 2 &&
    //     str[i] === bracketsConfig[1][1] &&
    //     rezult[rezult.length - 1] !== bracketsConfig[1][0]) ||
    //   (bracketsConfig.length === 3 &&
    //     str[i] === bracketsConfig[2][1] &&
    //     rezult[rezult.length - 1] !== bracketsConfig[2][0]) ||
    //   (bracketsConfig.length === 4 &&
    //     str[i] === bracketsConfig[3][1] &&
    //     rezult[rezult.length - 1] !== bracketsConfig[3][0]) ||
    //   (bracketsConfig.length === 5 &&
    //     str[i] === bracketsConfig[4][1] &&
    //     rezult[rezult.length - 1] !== bracketsConfig[4][0])
    // ) {
    //   return false; // неправильная скобочка
    // }

    if (
      // (str[i] === bracketsConfig[0][1] &&
      //   rezult[rezult.length - 1] === bracketsConfig[0][0]) ||
      // (bracketsConfig.length === 2 &&
      //   str[i] === bracketsConfig[1][1] &&
      //   rezult[rezult.length - 1] === bracketsConfig[1][0]) ||
      // (bracketsConfig.length === 3 &&
      //   str[i] === bracketsConfig[2][1] &&
      //   rezult[rezult.length - 1] === bracketsConfig[2][0]) ||
      // (bracketsConfig.length === 4 &&
      //   str[i] === bracketsConfig[3][1] &&
      //   rezult[rezult.length - 1] === bracketsConfig[3][0]) ||
      // (bracketsConfig.length === 5 &&
      //   str[i] === bracketsConfig[4][1] &&
      //   rezult[rezult.length - 1] === bracketsConfig[4][0])
      bracketsConfig.find(
        (pair) => str[i] === pair[1] && rezult[rezult.length - 1] === pair[0]
      )
    ) {
      // rezult.length = rezult.length - 1;
      // console.log("now result is ", rezult);
      // console.log("mi popim ", str[i]);
      rezult.pop(); // удаление правильной скобочки
      // console.log("zakonchili cicle and we have array ", rezult);
      continue;
    }
    // if (str[i] !== str[i - 1]) {

    if (
      // str[i] === bracketsConfig[0][0] ||
      // (bracketsConfig.length == 2 && str[i] === bracketsConfig[1][0]) ||
      // (bracketsConfig.length == 3 && str[i] === bracketsConfig[2][0]) ||
      // (bracketsConfig.length == 4 && str[i] === bracketsConfig[3][0]) ||
      // (bracketsConfig.length == 5 && str[i] === bracketsConfig[4][0])
      bracketsConfig.some((pair) => str[i] === pair[0])
    ) {
      rezult.push(str[i]); // правильная скобочка
      // console.log("now result is ", rezult);
      // console.log("mi pushim ", str[i]);
      continue;
    }
    if (
      rezult.length === 0 &&
      str[i] ===
        (bracketsConfig[0][1] ||
          bracketsConfig[0][0] ||
          bracketsConfig[0][2] ||
          bracketsConfig[0][3] ||
          bracketsConfig[0][4])
    ) {
      return false;
    }
    // }

    // конец решения
  }
  // console.log("finish ", rezult);
  // console.log(rezult.length === 0);
  return rezult.length === 0 ? true : false;
};
// если пробежаться и сравнить с bracketsConfig[][]
