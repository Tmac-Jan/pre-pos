'use strict';

function countSameElements(collection) {
  let obj ={};
  let array=[];
  for (let i in collection){
    if (obj[collection[i]]){
      obj[collection[i]]++;
    } else{
      obj[collection[i]]=1;
    }
  }
  for (var i=0;i<collection.length;){
    let o={};
    o.key=collection[i];
    o.count=obj[collection[i]];
    array.push(o);
    i+=obj[collection[i]];
  }
  return array;
}
