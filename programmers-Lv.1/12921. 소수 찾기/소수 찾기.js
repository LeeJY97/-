function solution(n) {
  answer = 0;

  const arr = Array.from({ length: n + 1 }, (_, index) => index);

  for (let i = 2; i <= arr.length; i++) {
    if (arr[i] === 0) continue;

    for (let j = i + i; j < arr.length; j += i) {
      arr[j] = 0;
    }
  }

  return arr.filter(cur => cur > 1).length;
}