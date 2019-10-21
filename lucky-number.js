function findLuckyNumberPosition(luckyNumber, minNumber, maxNumber) {
  const luckyNumberRegex = /^[4,7]+$/g;
  let position = 0;
  for (var i = minNumber; i <= maxNumber; i += 1) {
    if (String(i).match(luckyNumberRegex)) {
      position += 1;
      if (i === luckyNumber) {
        break;
      }
    }
  }
  return position;
}


function recursiveFindLuckyNumberPosition(number, memo) {
  let matchRegex = /^[4,7]+$/g;

  memo = memo || [];

  if (number === 4) {
    memo.push(number);
    return memo.length;
  }

  if(String(number).match(matchRegex)){
    memo.push(number);
  }

  return recurPosition(number - 1, memo);
}
