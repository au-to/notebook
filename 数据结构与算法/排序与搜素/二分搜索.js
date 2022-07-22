function binarySearchRecursive (array, value, low, high) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if (element < value) {
      low = mid + 1;
      return binarySearchRecursive(low, high);
    } else if (element > value) {
      high = mid - 1;
      return binarySearchRecursive(low, high);
    } else {
      return mid;
    }
  }
}