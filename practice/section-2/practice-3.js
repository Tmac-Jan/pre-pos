'use strict';

function countSameElements(collection) {
  let obj ={};
  let array=[];
  // var re = new RegExp("[a-z]-[0-9]","g");
  // var re1 = /[0-9]/g;
  var re1 = /^[a-z]-[0-9]$/g;
  var re2 = /^[a-z]\[[0-9]\]$/g;
  var re3 = /^[a-z]:[[0-9]\]$/g;
  for (let i in collection){
    if (obj[collection[i]]){
      obj[collection[i]]++;
    } else{
      obj[collection[i]]=1;
    }
  }
  let keyArray = Object.keys(obj);
  // console.log('keyArray');
  // console.log(keyArray);
  let valueArray= Object.values(obj); // 获取所有value返回数组
  keyArray.map(function (a,index) {
    if (re1.exec(a)) {
      // keyArray[index]=RegExp.$1;
      // valueArray[index]=RegExp.$2;
      let array_sp1=a.split('-');
      keyArray[index]= array_sp1[0];
      valueArray[index]=array_sp1[1];
    }
    if (re2.exec(a)){
    //  let array_sp2=a.split(':');
      let num_return = parseInt(a.replace(/[\D]/ig,''));
      keyArray[index]=a.substring(0,1)
      valueArray[index]=valueArray[index]+parseInt(num_return);
    }
    if (re3.exec(a)){
      let array_sp2=a.split(':');
      keyArray[index]=a.substring(0,1)
      valueArray[index]=valueArray[index]+parseInt(array_sp2[1]);
    }
  });
  for (var i=0;i<keyArray.length;i++){
    let obj2={};
    obj2.name=keyArray[i];
    obj2.summary=valueArray[i];
    array.push(obj2);
  }
  return array;
}

