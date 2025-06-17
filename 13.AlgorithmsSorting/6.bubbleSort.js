const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
/* const bubbleSort = function (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let max = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = max
            }
        }
    }

    return numbers

} */


/* const bubbleSort = function (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
            }
        }
    }

    return numbers

} */

const bubbleSort = function (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
            }
        }
    }
    return numbers
}


console.log(bubbleSort(numbers))