'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.map(function (a) {
    for (var i=0;i<objectB.value.length;i++){
      if (a.key==objectB.value[i]){
      let sub = parseInt(a.count/3);
      a.count-=sub;
      }
    }
  });
  return collectionA;
}
