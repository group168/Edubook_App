/* eslint-disable no-unused-vars */
module.exports = {
  binarySearch:(array, value)=> {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = array[mid];
      if (midValue === value) {
        return mid;
      } else if (midValue < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
};

