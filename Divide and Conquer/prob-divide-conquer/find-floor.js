function findFloor(arr,x) {
    let firstInd = 0;
    let lastInd = arr.length -1;

    if(x < arr[firstInd]){
        return -1;
    }

    while(firstInd <= lastInd){
        let midInd = Math.floor((firstInd+lastInd)/2);
        let midVal = arr[midInd];

        if(midVal > x){
            lastInd=midInd;
        }
        if(midVal < x && arr[midInd+1] < x){
            firstInd = midInd+1;
        }
        if(midVal <= x && arr[midInd+1] > x){
            return midVal;
        }

        if(midInd === arr.length-1){
            return midVal;
        }
    }
}

module.exports = findFloor

//findFloor([1,2,8,10,10,12,19], 20)
//findFloor([1, 2, 8, 10, 10, 12, 19], 0)