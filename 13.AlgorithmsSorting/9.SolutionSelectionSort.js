const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
const number2 = [8, 5, 2, 6, 9, 3, 1, 4, 10, 7]

const selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        let temp = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            console.log("j and mins",arr[j],arr[min])
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        arr[i] = arr[min]
        arr[min] = temp
    }

    return arr

}

console.log(selectionSort(number2))