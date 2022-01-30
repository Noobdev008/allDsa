var maxSubArray = function(nums) {
    var maxSub = nums[0];
     var value =0;
     
     for(var i=0; i<nums.length; i++){
         if(value<0){
             value=0
         }
        value +=  nums[i];
         maxSub = Math.max(maxSub,value)
     }
     
     return maxSub
     
 };