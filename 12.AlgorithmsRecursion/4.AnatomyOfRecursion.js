let counter = 0

function inception(num) {
    if (counter === 100) {
        console.log("Done")
        return
    }
    counter++
    inception()
}

inception()