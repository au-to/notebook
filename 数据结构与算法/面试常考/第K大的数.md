解法1：排序

``` 
var largestkth = function(nums) {
	nums.sort((a,b)=>b-a);
	return nums[k-1];
}
```