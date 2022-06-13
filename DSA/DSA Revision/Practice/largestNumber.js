let arr = [7, 8, 44, 24, 12]
function largestNumber(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max)
}

largestNumber(arr)