'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(function(a){
         for(let i=0;i<=collectionB[0].length;i++){
              if(a == collectionB[0][i]){
              return true;
             }
         }
         return false;
      });
}
