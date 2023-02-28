const arr = [1, 2, 3, 4, 4, 1, 2, ,5, 4, 4, 6, 7, 9, 0, 8, 7, 4, 6, 3];

function countDuplicate(arr){
    let output = {};

    arr.forEach(ele => {
        output[ele] = (output[ele] || 0) + 1
    });

    return output;
}

console.log('duplicate', countDuplicate(arr));