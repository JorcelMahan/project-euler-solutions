function sumEvenFibonacci(n) {
    let a = 1, b = 2;
    let sum = 0;

    while (a <= n) {
        if (a % 2 === 0) {
            sum += a;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }

    return sum;
}

console.log(sumEvenFibonacci(8))