function reverseWords(s) {
    // sol 1
    // return s.split('.').reverse().join('.')

    // sol 2
    let arr = [];
    let str = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '.') {
            str += s[i];
        } else {
            arr.push(str);
            str = '';
        }

        if (i == s.length - 1) {
            arr.push(str);
            str = '';
        }
    }

    // console.log(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
        str += arr[i];
        if (i !== 0) {
            str += '.'
        }
    }

    return str;
}

console.log(reverseWords('i.like.this.program.very.much'));