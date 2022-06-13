function fibo(n){
   let initial =0;
   let next =1;
   let count =2;
   while(count<=n){
        let temp = next;
        next = initial+next;
        initial = temp;
        count++
   }
   console.log(next)
}
fibo(7)