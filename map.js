var isArray = function(data){
  if(data.constructor == Array){
    return true;
  }
  return false;
}

var arrayCheck = function(data){
  if(isArray(data)){
    return;
  }
  throw new Error("Expecting an Array");
}

var map = function(data,cb,initArray,startPoint){
  arrayCheck(data);
  var point = startPoint || 0;
  var newArray = initArray || [];
  var head = data.slice(0,1);
  var tail = data.slice(1);
  if(head[0]){
    newArray.push(cb(head[0],point));
    return map(tail,cb,newArray,point+=1);
  }
  else{
    return newArray;
  }
}

module.exports = map;