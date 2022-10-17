function findFirst(arr,val){

    let firstInd = 0;
    let lastInd = arr.length -1;
    while(lastInd >= firstInd){
        let midInd = Math.floor((firstInd+ lastInd) /2);
        let midVal = arr[midInd];
        if (midVal < val){
        firstInd = midInd+1;}
        if(midVal > val){
            lastInd = midInd-1;
        }
        if(midVal === val){
            
            lastInd = midInd;
    }
        if (midVal === val && arr[midInd-1] !== midVal){
            return midInd;
        }
    }
}

function findLast(arr,val){

    let firstInd = 0;
    let lastInd = arr.length -1;
    while(lastInd >= firstInd){
        let midInd = Math.floor((firstInd+ lastInd) /2);
        let midVal = arr[midInd];
        if (midVal < val){
        firstInd = midInd+1;}
        if(midVal > val){
            lastInd = midInd-1;
        }
        if(midVal === val){
            
            firstInd = midInd;
    }
        if (midVal === val && arr[midInd+1] !== midVal){
            return midInd;
        }
    }
}

function sortedFrequency(theArr,theVal) {
    let initFirst = arr[0];
    let initLast = arr[arr.length-1];
    if(val > initLast || val < initFirst){return -1;}
    let first = findFirst(theArr, theVal);
    let last = findLast(theArr,theVal);

    return (last-first)+1;

}





module.exports = sortedFrequency