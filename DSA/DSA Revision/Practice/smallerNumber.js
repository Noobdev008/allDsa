let arr = [7, 8, 44, 24, 12]
function largestNumber(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min)
}

largestNumber(arr)