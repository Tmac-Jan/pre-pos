'use strict';

function countSameElements(collection) {
  // let array = [];
  // //var sortArray=collection.sort();
  // for (var i= 0; i < collection.length;i++) {
  //   var count = 0, obj = {};
  //   for (var j = i; j < collection.length; j++) {
  //     if (collection[i] == collection[j]) {
  //       count++;
  //     }
  //   }
  //   obj.key = collection[i]
  //   obj.count = count;
  //
  //   array.push(obj);
  //   // i += count;
  // }
  //
  // return array;
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
