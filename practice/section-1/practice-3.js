'use strict';

function collectSameElements(collectionA, objectB) {
 return collectionA.filter(function(a){
                 for(let i=0;i<=objectB.value.length;i++){
                      if(a == objectB.value[i]){
                      return true;
                     }
                 }
                 return false;
     });
}
