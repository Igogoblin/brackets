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
  let stack = [];
  let OPEN_BRACKETS = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    console.log(bracketsConfig[i][0]);
  }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
