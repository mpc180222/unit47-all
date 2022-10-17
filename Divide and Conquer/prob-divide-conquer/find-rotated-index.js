function findRotatedIndex(arr, val) {
    let firstInd = 0;
    let lastInd = arr.length-1;
    if(arr[firstInd] ===val){
        return 0;
    }
    if(arr[lastInd] ===val){
        return lastInd;
    }


    while(firstInd < lastInd){
        let midInd = Math.floor((firstInd+lastInd)/2);
        let midVal = arr[midInd];
        if(midVal === val){
            return midInd;
        }
        if(arr[midInd+1] === val){
            return midInd+1;
        }
        if(arr[midInd-1] === val){
            return midInd-1;
        }
        if(midVal > val && arr[lastInd] > val){
            firstInd = midInd+1;
        }
        if(midVal > val && arr[lastInd] < val){
            lastInd = midInd-1;
        }
        if(midVal < val && arr[midInd+1] > val){
            return -1;
        }
        if(arr[midInd+1] < midVal && midVal < val){
            return -1;
        }
    }
}

module.exports = findRotatedIndex