function factorialRecursive(number) {
    if (number === 1) {
        return 1
    }

    return number * factorialRecursive(number - 1)
}

console.log("Factorial Recursive", factorialRecursive(5))

function factorialIterative(number) {
    let total = 1
    for (let i = number; i >= 2; i--) {
        total = total * i
    }

    return total
}

console.log("Factorial Iterative", factorialIterative(5))