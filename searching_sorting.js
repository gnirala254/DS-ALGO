//factorial
function factorialLoop(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = result * i
    }

    return result;
}
// console.log(factorialLoop(6));

function factorialRecursive(n) {
    if (n < 2) {
        return 1;
    }

    return n * factorialRecursive(n - 1);
}
// console.log(factorialRecursive(5));
/////////////////////////////////////////////////////////////////////////////////////

// fibonacci array
function fibonacciArr(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }

    return fib;
}
// console.log('fibonacciArr', fibonacciArr(7));

function nthFib(n) {
    if (n < 2) {
        return n
    }

    return nthFib(n - 1) + nthFib(n - 2)
}
// console.log('fibonacciArr', nthFib(7));
/////////////////////////////////////////////////////////////////////////////////////


// Is Power of two
function isPowerOfTwo(n) {
    if (n < 2) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }

        n = n / 2;
    }

    return true;
}
// console.log('isPowerOfTwo', isPowerOfTwo(8));

function isPowerOfTwoBitwise(n) {
    if (n < 2) {
        return false;
    }

    return (n & n - 1) === 0
}
// console.log('isPowerOfTwoBitwise', isPowerOfTwoBitwise(8));
/////////////////////////////////////////////////////////////////////////////////////

// Linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }
    }

    return -1;
}
// console.log('linearSearch', linearSearch([1,5,9,12,77,33,45,6], 6));

// Binary search => works only on sorted arrays
function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[midIndex] === target) {
            return midIndex;
        }

        if (target < arr[midIndex]) {
            rightIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
    }

    return -1;
}
// console.log('binarySearch', binarySearch([1, 5, 6, 9, 12, 33, 45, 77], 6));

// Binary search with recursion 
function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midIndex]) {
        return midIndex;
    }

    if (target < arr[midIndex]) {
        return search(arr, target, leftIndex, midIndex - 1);
    } else {
        return search(arr, target, midIndex + 1, rightIndex);
    }
}
// console.log('recursiveBinarySearch', recursiveBinarySearch([1, 5, 6, 9, 12, 33, 45, 77], 6));
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// bubble sort
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // swap
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}
// console.log('bubbleSort', bubbleSort([1,5,9,12,77,33,45,6]));

// insertion sort
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert;
    }
    return arr;
}
// console.log('insertionSort', insertionSort([1,5,9,12,77,33,45,6]));

// merge sort
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr
}
// console.log('mergeSort', mergeSort([1, 5, 9, 12, 77, 33, 45, 6]));


// quick sort with extra space
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}
// console.log('quickSort', quickSort([1, 5, 9, 12, 77, 33, 45, 6]));

// quick sort without extra space
function qSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pIndex = getPivotIndex(arr, left, right);
        qSort(arr, left, pIndex - 1);
        qSort(arr, pIndex + 1, right);
    }
    return arr;
}
function getPivotIndex(arr, left, right) {
    let p = right;
    let j = left;
    let i = left - 1;

    while (j <= p) {
        if (arr[j] < arr[p]) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
            // j++
        }
        j++
    }

    i++;
    [arr[i], arr[p]] = [arr[p], arr[i]];
    return i;
}
// console.log('qSort', qSort([1, 5, 9, 12, 77, 33, 45, 6]));

////////////////////////////////////////////////////////////////////////////////////////////////////
// climbing staircase
function climbingStaircase(n) {
    const noOfWays = [1, 2]
    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }
    return noOfWays[n - 1]
}

// console.log(climbingStaircase(1))
// console.log(climbingStaircase(2))
// console.log(climbingStaircase(3))
// console.log(climbingStaircase(4))
// console.log(climbingStaircase(5))
