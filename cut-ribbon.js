function split(length, splitInput, memo) {
  memo = memo || {};
  let ans = -1;

  if (memo[length]) {
    return memo[length];
  }

  if (length <= 0) {
    return 0;
  }

  splitInput.forEach(item => {
    if (length >= item) {
      ans = Math.max(ans, 1 + split(length - item, splitInput, memo));
    }
  });

  memo[length] = ans;

  return ans;
}


split(7, [5, 5, 2])
