'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let obj ={};
  let array=[];
  var re = /^[a-z]-[0-9]$/g;
  for (let i in collectionA){
    if (obj[collectionA[i]]){
      obj[collectionA[i]]++;
    } else{
      obj[collectionA[i]]=1;
    }
  }
  let keyArray = Object.keys(obj);
  let valueArray= Object.values(obj); // 获取所有value返回数组
  keyArray.map(function (a,index) {
    if (re.exec(a)) {
      let array_sp=a.split('-');
      keyArray[index]=array_sp[0];
      valueArray[index]=parseInt(array_sp[1]);
    }
  });
  for (var i=0;i<keyArray.length;i++){
    let obj2={};
    obj2.key=keyArray[i];
    obj2.count=valueArray[i];
    array.push(obj2);
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
