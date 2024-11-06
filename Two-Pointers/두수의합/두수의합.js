function sumZero(arr, target) {
  let [left, right] = [0, arr.length - 1];

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    }

    if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// console.log(sumZero([-5, -4, -1, 0, 1, 2, 3],0));
console.log(sumZero([-4, -3, -2, -1, 0, 4, 10, 12], 0));