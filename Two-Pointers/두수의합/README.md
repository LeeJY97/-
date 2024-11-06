# 투 포인터: 두 수의 합

## 문제

```
목표: 주어진 정수 배열에서 두 수의 합이 `target`이 되는 두 수를 찾기

예를 들어 [-3, -2, -1, 0, 1, 2, 3] 으로 이루어진 배열과 target이 0인 경우 두 수의 합이 0이되는 두 수는 -3과 3이므로 [-3, 3]을 반환한다.

ex)
sumZero([-3, -2, -1, 0, 1, 2, 3],0) // [-3, 3]
sumZero([-2, 0, 1, 3],0) // undefined
sumZero([1,2,3],0) // undefined


배열은 정렬되어 있다고 가정한다.
```

## 풀이

#### 1. left와 right 선언

```js
let [left, right] = [0, arr.length - 1];
```

좌우 맨 끝에서부터 중앙으로 가면서 값을 비교하기 때문에 가장 작은 index인 0을 `left`, 가장 큰 index인 **배열 길이 -1** 을 `right` 에 할당해준다.

---

#### 2. 반복문 작성

```js
while (left < right) {
  /** . . . */
}
```

`left` 가 `right` 보다 작을 때 까지 반복하는 반복문 작성. 즉, 좌우 양 끝에서 시작해서 만나는 지점까지 탐색하며 반복하게 된다.

---

#### 3. 조건문 작성

```js
while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === target) {
    return [arr[left], arr[right]];
  }

  if (sum > 0) {
    right--;
  } else {
    left++;
  }
}
```

만약 `arr[left]` (이하 arr생략)와 `right`의 합이 `target(0)` 과 같을 경우 두 수를 반환한다. 합이 `0`보다 클 경우 `right`에서 1 빼고, `0`보다 작을 경우 `left`에서 1을 더한다.

배열이 정렬되어 있고, `0`보다 큰 경우 더 작은 숫자를 갖고 비교를 해야하니 `right` 즉, 배열의 `index`를 낮춘 뒤 다시 비교하고, 만약 `0`보다 작은 경우 마찬가지로 큰 수를 갖고 비교를 해야하니 `left` 를 높인 뒤 비교한다.

[전체 코드](./두수의합.js)
