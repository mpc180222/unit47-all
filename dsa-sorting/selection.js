function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1 ; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

// [5 1 2 3 4] [1 5 2 3 4]
module.exports = selectionSort;