/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let map = new Map();
    if(nums.length==1) {
        return nums[0];
    }
    for(let num of nums){
        if(!map.has(num)){
            map.set(num,1);
        }else {
            let count = map.get(num);
            count++;
            map.set(num,count);
            if(count>nums.length/2){
                return num;
            }
        }
    }
};