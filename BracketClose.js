let myStr = '{}{{[()]}}{';
let map = {
    '}': '{',
    ']': '[',
    ')': '('
}

// function balanceBrackets(str) {
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         const item = str[i];
//         const top = stack[stack.length - 1];

//         if (item == '(' || item == '[' || item == '{') {
//             stack.push(item);
//         } else if ((item == ')' && top == '(') || (item == ']' && top == '[') || (item == '}' && top == '{')) {
//             stack.pop();
//         } else {
//             return false;
//         }
//     }
//     return stack.length ? false : true;
// }

function balanceBrackets(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        const item = str[i];
        const top = stack[stack.length - 1];

        if (item === '(' || item === '[' || item === '{') {
            stack.push(item);
        } else if (top === map[item]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length ? false : true;
}

console.log('result ', balanceBrackets(myStr));
