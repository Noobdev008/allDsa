let arr = [2, 3, 4,5,5, 4, 4, 2, 1, 3, 1]

let findUnique = (arr) => {
  return arr.reduce((prev,cur)=>prev^cur)
}

console.log(findUnique(arr))