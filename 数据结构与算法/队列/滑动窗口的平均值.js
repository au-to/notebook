// 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，
// 计算滑动窗口里所有数字的平均值

 var MovingAverage = function(size) {
    this.nums = [];
    this.capacity = size;
    this.sum = 0;
  };
  
  MovingAverage.prototype.next = function(val) {
    this.nums.push(val);
    this.sum += val;
    if (this.nums.length > this.capacity) {
      this.sum -= this.nums.shift();
    }
    return this.sum / this.nums.length;
  };