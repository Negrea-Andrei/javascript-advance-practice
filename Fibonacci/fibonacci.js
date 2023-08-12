function iterationFibonacci(n) {
    let arr = [];
    let number1 = 0;
    let number2 = 1;
    for(let i = 0; i < n; i++) {
        arr.push(number1);
        let temp = number2;
        number2 = temp + number1
        number1 = temp        
    }
    return arr
}

console.log(iterationFibonacci(8))

function recursiveFibonacci(n, number1 = 0, number2 = 1, arr = []) {
    if (n === 0) {
        return arr;
    } else {
        arr.push(number1);
        return recursiveFibonacci(n - 1, number2, number1 + number2, arr);
    }
}

console.log(recursiveFibonacci(8))