'use strict';

const number = process.argv[2] || 0;
console.log(fib(number));

/**
 * フィボナッチ数列のうち、num番目を返す
 * @param {Number} num 
 * @returns {Number}
 */
function fib(num) {
    let ans = 0;
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return fib(num - 1) + fib(num - 2)
    }
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}