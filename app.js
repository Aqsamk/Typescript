"use strict";
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const textReuslts = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    let a = num1.value;
    let b = num2.value;
    let result = add(+a, +b);
    numResults.push(result);
    let stringResult = add(a, b);
    textReuslts.push(stringResult);
    console.log(stringResult);
    console.log(result);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textReuslts);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
myPromise.then((result) => console.log(result.split('w'))).catch(err => console.log(err));
