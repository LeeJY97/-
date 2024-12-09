function solution(n) {
  const arr = Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 0; i ** 2 <= n; i++) {

    if (arr[i]) {

      for (let j = i + i; j <= n; j += i) {
        arr[j] = false;
      }

    }

  }

  const result = arr.filter(item => item)
  return result.length;
}

a = solution(15);

console.log('a', a);