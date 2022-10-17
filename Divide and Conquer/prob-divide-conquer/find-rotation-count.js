function findRotationCount(arr) {
  let firstInd= 0 ;
  let lastInd = arr.length-1;

  if(arr[0] < arr[1] && arr[0] < arr[lastInd]){
      return 0;
  }

  while(lastInd >= firstInd){
    let midInd = Math.floor((firstInd+lastInd)/2);
    let midVal = arr[midInd];
    if(midVal < arr[midInd-1] && midVal < arr[midInd+1]){
        return midInd;
    }
    if(arr[midInd+1] < midVal){
        return midInd+1;
    }

    if(midVal > arr[lastInd]){
        firstInd = midInd+1;

    }

    if(midVal < arr[lastInd]){
        lastInd = midInd-1;

    }
    

  }





}

module.exports = findRotationCount