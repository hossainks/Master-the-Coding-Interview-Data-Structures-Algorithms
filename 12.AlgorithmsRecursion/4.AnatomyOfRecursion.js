let counter = 0

function inception(num) {
    if (counter === 100) {
        return "Done"
    }
    counter++
    return inception()
}

console.log(inception())