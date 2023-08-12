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