'use strict'

function bubbleSort(list){
  let swapped=false;
    list.forEach((item,index)=>{
    if(item>list[index+1]){
      [list[index],list[index+1]] = [list[index+1],list[index]];
      swapped=true;
    }
  });
  if(swapped){
    return bubbleSort(list);
  }
  return list;
}


module.exports = bubbleSort
