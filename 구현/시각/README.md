# 구현: 시각

[전체 코드](./시각.js)

## 문제

정수 N이 입력되면 00시 00분 00초 부터 N시 59분 59초까지의 모든 시각 중 3이 하나라도 포함되는 모든 경우의 수를 구하는 프로그램을 작성.

예를 들어 3이 포함된 시간은 다음과 같다.

- 00시00분03초
- 00시13분03초
- 03시00분01초

## 풀이

#### 1. 반복문 작성

```js
for (let hour = 0; hour <= n; hour++) {
  for (let minute = 0; minute < 60; minute++) {
    for (let second = 0; second < 60; second++) {
      /* 조건 코드 작성 */
    }
  }
}
```

00시00분00초 ~ N시 59분 59초 까지 반복하는 반복문 작성

---

#### 2. 숫자를 문자열로 변경하고 문자열 비교 구현

```js
for (let second = 0; second < 60; second++) {
  const time = `${hour.toString().padStart(2, "0")}${minute
    .toString()
    .padStart(2, "0")}${second.toString().padStart(2, "0")}`;

  if (time.includes(3)) {
    count++;
  }
}
```
