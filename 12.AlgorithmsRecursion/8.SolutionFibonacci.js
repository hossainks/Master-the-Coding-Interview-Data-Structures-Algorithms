function fibonacciRecursive(n) {
    /*    if (n === 0) {
           return 0
       } else if (n === 1) {
           return 1
       } */
    if (n < 2) return n

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(8))

function fibonacciIterative(n) {
    let arr = [0, 1]
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    console.log(arr)
    return arr[n]
}

console.log(fibonacciIterative(8))