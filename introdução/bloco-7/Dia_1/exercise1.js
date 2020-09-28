const factorial = n => {
    let result = 1

    for (let index = 2; index <= n; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(4));