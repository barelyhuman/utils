function isArray(data) {
  if (data.constructor == Array) {
    return true;
  }
  return false;
};

function arrayCheck(data) {
  if (isArray(data)) {
    return;
  }
  throw new Error("Expecting an Array");
};

function forEach(data, cb, curPosition) {
  arrayCheck(data);
  var point = curPosition || 0;
  var head = data.slice(0, 1);
  var tail = data.slice(1);
  if (head[0]) {
    cb(head[0], point);
    return forEach(tail, cb, (point += 1));
  } else {
    return true;
  }
};

module.exports = forEach;
