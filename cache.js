'use strict'

function cache(functionToCache){
  const cacheMemo = {};

  return function(){
    const groupingKey = Object.values(arguments).join('-');
    if(cacheMemo[groupingKey]){
      return cacheMemo[groupingKey];
    }
    const value = functionToCache.apply(null,arguments);
    cacheMemo[groupingKey] = value;
    return value;
  }

}

modules.export = cache;
