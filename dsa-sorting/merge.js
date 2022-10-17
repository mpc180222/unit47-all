function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        result.push(arr1[i]);
        i = i + 1 ;
    }
    else{
        result.push(arr2[j]);
        j = j + 1 ;   
    }
}
    if(j === arr2.length){
        while(i < arr1.length){
            result.push(arr1[i]);
            i = i +1;

        }
    }
    if(i === arr1.length){
        while(j < arr2.length){
            result.push(arr2[j]);
            j = j +1;
        }
    }
    return result;
   }

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));

    return merge(left,right);


}

module.exports = { merge, mergeSort};