/**
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

n은 2이상 1000000이하의 자연수입니다

1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환
 */
function solution(n) {
  answer = 0;

  // 1. 2부터 n 까지의 배열 생성
  const arr = Array.from({ length: n + 1 }, (_, index) => index);

  console.log('arr', arr);

  // 2. 본인이 소수일 경우 배수 전부 제거
  for (let i = 2; i <= arr.length; i++) {
    if (arr[i] === 0) continue;

    console.log('arr[i]', arr[i]);

    for (let j = i + i; j < arr.length; j += i) {
      // console.log('arr[j]', arr[j]);
      arr[j] = 0;
    }
  }

  return arr.filter(cur => cur > 1).length;
}

a = solution(15);

console.log('a', a);