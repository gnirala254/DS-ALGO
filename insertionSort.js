function insertionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        const numberToInsert = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j -1;
        }
        arr[j + 1] = numberToInsert;
        
    }

    return arr;
}

console.log('Insertion sort', insertionSort([1,5,9,12,77,33,45,6]));