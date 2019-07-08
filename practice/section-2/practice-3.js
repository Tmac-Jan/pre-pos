'use strict';

function countSameElements(collection) {
  let array = [];
  let obj = {};
  // var re = new RegExp("[a-z]-[0-9]","g");
  // var re1 = /[0-9]/g;
  var re1 = /^[a-z]-[0-9]$/g;
  var re2 = /^[a-z]\[[0-9]\]$/g;
  var re3 = /^[a-z]:[0-9]$/g;
  collection.forEach(function (a) {
    console.log(a)
    if (re1.exec(a)) {
      console.log('符合re1');
      console.log(a)
      let array_sp1 = a.split('-');
      let key1 = array_sp1[0];
      let value1 = array_sp1[1];
      obj[key1] = value1;
    }
    if (re2.exec(a)) {
      console.log('符合re2');
      let num_return2 = parseInt(a.replace(/[\D]/ig, ''));
      let key2 = a.substr(0, 1);
      let num = 0;
      num = obj[key2] ? 1 : obj[key2]+num_return2;
      obj[key2] = num;
    }
    if (re3.exec(a)) {
      console.log('符合re3');
      let array_sp3 = a.split(':');
      let key3= array_sp3[0];
      let value3= array_sp3[1];
      obj[key3] = value3;
    }
  });
  let keyArray = Object.keys(obj);

  let valueArray= Object.values(obj); // 获取所有value返回数组
  console.log(valueArray);
  keyArray.map(function (a,index) {
    let objj = {};
    objj.name=a;
    objj.summary=valueArray[index];
    array.push(objj);
  })
  return array;
}





