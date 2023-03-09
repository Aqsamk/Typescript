const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults : Array<number> = [];
const textReuslts  : string[] = [];

type NumOrString = number | string
interface ResultObj  {
    val:number;
    timestamp:Date;
}

function add(num1:NumOrString,num2:NumOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj : ResultObj) {
    console.log(resultObj.val);
}

buttonElement.addEventListener('click', () => {
    let a = num1.value;
    let b = num2.value;
    let result = add(+a,+b)
    numResults.push(result as number)
    let stringResult = add(a,b)
    textReuslts.push(stringResult as string)
    console.log(stringResult)
    console.log(result)
    printResult({val:result as number,timestamp: new Date()})
    console.log(numResults,textReuslts);
})


const myPromise = new Promise<string>((resolve,reject) => {
    setTimeout(() => {
        resolve('it worked');
    },1000)
})

myPromise.then((result) => console.log(result.split('w'))).catch(err => console.log(err))