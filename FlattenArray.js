let arr = [1, 2, 3, [4, [5, 6, 7, [8, 9]]], 10, [11, 12, [13]]];
let result = [];

function flatArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (Array.isArray(ele)) {
            flatArr(ele);
        } else {
            result.push(ele);
        }
    }
}
flatArr(arr);
console.log('result', result);








// function returnResult(arr) {
//     let result = [];

//     function flatArr(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             const ele = arr[i];
//             if (Array.isArray(ele)) {
//                 flatArr(ele)
//             } else {
//                 result.push(ele)
//             }
//         }
//     }
//     flatArr(arr);
//     return result;
// }

// console.log('returnResult', returnResult([1, 2, 3, [4, [5, 6, 7, [8, 9]]], 10, [11, 12, [13]]]));


