let arr = [2,3,1,1,4,5,2,0,7,2,5,6,6,8,0]


function sort(arr){
  
    for(let j=0; j<=arr.length-1; j++ ){
      if(arr[j-1]>arr[j]){
        let temp = arr[j]
        arr[j]=arr[j-1]
        arr[j-1]=temp
        j=-1
      }
    
  }
  return(arr)
}
function remove(arr){
  arr = sort(arr)
  // console.log(arr)
  let b =[]
  let temp;
  for(let i=0; i<arr.length; i++){
    if(arr[i]!=temp){
      b.push(arr[i]);
      temp =arr[i]
    }
  }
  console.log(b)
}


remove(arr)