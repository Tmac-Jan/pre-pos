'use strict';

function collectSameElements(collectionA, collectionB) {
 return collectionA.filter(function(a){
        for(let i=0;i<=collectionB.length;i++){
            if(collectionB[i]==a){
            return true;
            }
        }
        return false;
     });
}
