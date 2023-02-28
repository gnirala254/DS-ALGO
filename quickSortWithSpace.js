function quickSortWithSpace(arr){
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSortWithSpace(leftArr), pivot, ...quickSortWithSpace(rightArr)]
}

console.log('Quick sort', quickSortWithSpace([1,3,5,1,3,0,6,4,9,33,5,0,88]));