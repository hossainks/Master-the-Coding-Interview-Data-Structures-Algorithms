function inception(num) {
    num--
    console.log(num)
    if (num === 0) return
    inception(num)
}

inception(10)