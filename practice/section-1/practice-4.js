'use strict';

function collectSameElements(collectionA, objectB) {
 let array=[];
  collectionA.filter(function(a){
        for(let i=0;i<=objectB.value.length;i++){
             if(a.key == objectB.value[i]){
             array.push(a.key);
             return true;
            }
        }
        return false;
     });
   return array;
}
