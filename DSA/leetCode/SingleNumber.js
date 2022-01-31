// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.


//1st Sloution 

var singleNumber = function(nums) {
    var count =0;
     for(var i = 0; i<=nums.length;i++){
    var count = 0;
    for(var j = 0; j<=nums.length;j++){
      if(nums[i] == nums[j]){
        count++;
      }
    }
    if(count == 1){
      return nums[i];
    }
    
  }
};




// 2nd solution 

var singleNumber = function(nums) {
    return nums.reduce((a,b)=>a^b)
 };