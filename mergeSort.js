function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    let sortedArr = [];

    while (leftArr.length && rightArr.length) {
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr[0]);
            leftArr.shift()
        } else {
            sortedArr.push(rightArr[0]);
            rightArr.shift()
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log('Merge sort', mergeSort([1, 5, 9, 12, 77, 33, 45, 6]));