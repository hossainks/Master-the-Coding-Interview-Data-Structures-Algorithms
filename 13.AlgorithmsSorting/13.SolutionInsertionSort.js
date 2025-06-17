const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
const number2 = [6, 5, 3, 1, 8, 7, 2, 4]

const selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      
        for (let j = 0; j < i + 1; j++) {
            console.log(arr[j])
            // if (arr[j + 1] < arr[j]) {
            //     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            // }
            //if(j== 2) return
        }

        console.log("==================")
    }

    //return arr
}

console.log(selectionSort(number2))