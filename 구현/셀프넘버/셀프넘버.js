// 생성자 반환
function d(n) {
  let sum = n;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

// 배열 초기화
let isSelfNumber = Array(10000).fill(true);

// d(n)을 계산해서 생성자를 찾기
for (let i = 1; i <= 10000; i++) {
  let generatedNumber = d(i);
  if (generatedNumber <= 10000) {
    isSelfNumber[generatedNumber] = false;
  }
}

// 셀프 넘버 출력
for (let i = 1; i <= 10000; i++) {
  if (isSelfNumber[i]) {  // 생성자가 없으면 셀프 넘버
    console.log(i);
  }
}