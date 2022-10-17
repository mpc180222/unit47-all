function countZeroes(arr) {

    let firstInd = 0;
    let lastInd = arr.length -1;
    let counter = 0;
    while(arr[arr.length-1] === 0){
        lastInd = arr.length -1;
        let midInd = Math.floor((firstInd+ lastInd) /2)
        if (arr[midInd] === 1){
        firstInd = midInd+1;
    }else if(arr[midInd] === 0){
            arr.pop();
            
            counter = counter + 1;
    }
    
    }
        
    return counter;
    
    }




module.exports = countZeroes