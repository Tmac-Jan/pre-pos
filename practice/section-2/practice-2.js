'use strict';

function countSameElements(collection) {
  let obj ={};
  let array=[];
  // var re = new RegExp("[a-z]-[0-9]","g");
  var re = /^[a-z]-[0-9]$/g;
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
      if (re.exec(a)) {
        debugger;
        console.log(a);
        console.log('i:'+index);
        // keyArray[index]=RegExp.$1;
        // valueArray[index]=RegExp.$2;
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
  // for (var i=0;i<collection.length;i++){
  //   let o={};
  //   o.key=collection[i];
  //   o.count=obj[collection[i]];
  //   if (re.test(o.key)){
  //     debugger;
  //     console.log(o);
  //     console.log('pop before');
  //     console.log(array);
  //     array.pop(o);
  //     console.log('pop after');
  //     console.log(array);
  //     console.log('$1:'+RegExp.$1);
  //     o.key=RegExp.$1;
  //     o.count=RegExp.$2;
  //     console.log(o);
  //
  //   }
  //   array.push(o);
  //   i+=obj[collection[i]];
  // }
  return array;
}
