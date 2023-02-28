function quickSortWithoutSpcae(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivot = getPivotIndex(arr, left, right);
        quickSortWithoutSpcae(arr, left, pivot - 1);
        quickSortWithoutSpcae(arr, pivot + 1, right);
    }

    return arr;
}

function getPivotIndex(arr, left, right){
    let p = right;
    let j = left;
    let i = left - 1;

    while (j <= p) {
        if(arr[j] < arr[p]){
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        j++
    }

    i++;
    [arr[p], arr[i]] = [arr[i], arr[p]];
    return i;
}

console.log('quick sort', quickSortWithoutSpcae([1, 5, 9, 12, 77, 33, 45, 6]));