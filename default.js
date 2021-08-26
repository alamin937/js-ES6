function addNumber(number1, number2 = 0){
    // console.log(number1, number2);
    // if(number2 == undefined){
    //     number2 = 0
    // }
    const numbers = number1 + number2;
    return numbers;
}

const number = addNumber(15,14);
console.log(number);

function getSum(a, b=9){
    return a + b
};

const sum = getSum(2,7);
console.log(sum);
const y = x => x * x

const x = y(5);

console.log(x);

