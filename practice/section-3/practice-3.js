'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let obj ={};
  let array=[];
  for (let i in collectionA){
    if (obj[collectionA[i]]){
      obj[collectionA[i]]++;
    } else{
      obj[collectionA[i]]=1;
    }
  }
  for (var i=0;i<collectionA.length;){
    let o={};
    o.key=collectionA[i];
    o.count=obj[collectionA[i]];
    array.push(o);
    i+=obj[collectionA[i]];
  }
  array.map(function (a) {
    for (let i=0;i<objectB.value.length;i++){
      if(objectB.value[i]==a.key){
        a.count-=parseInt(a.count/3);
      }
    }
  });
  return array;
}
