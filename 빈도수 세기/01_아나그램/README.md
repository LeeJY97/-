# 빈도수 세기: 애너그램 도전 과제

[전체 코드](./anagrams.js)

## 문제

각각의 문자열의 횟수를 비교해 서로 같은지를 확인하는 문제.
문자가 그 안에 있는 경우뿐만 아니라 안에 있는 문자들이 나타나는 정확한 횟수, 그리고 빈도가 정확한지를 확인

**true 예시**

```
validAnagram('', '')
validAnagram('anagram', 'nagaram')
validAnagram('qwerty', 'qeywrt')
validAnagram('texttwisttime', 'timetwisttext')
```

같은 문자열이 포함되고, 빈도도 같음

**false 예시**

```
validAnagram('aaz', 'zza')
validAnagram('rat', 'car')
validAnagram('awesome', 'awesom')
```

문자열이 포함되지 않거나, 빈도가 같지 않음

---

## 풀이

#### 1. 두 문자열을 받는 함수 선언 (기준 문자열, 비교 문자열)

```js
function validAnagram(standardStr, compareStr) {}
```

---

#### 2. 두 문자열의 길이가 다르면 false

```js
if (standardStr.length !== compareStr.length) return false;
```

---

#### 3. 기준 문자열을 반복하여 `문자별(key):값(value)` 객체 생성

```js
const standardCount = {};

for (const c of standardStr) {
  standardCount[c] = !standardCount[c] ? 1 : standardCount[c] + 1;
}
// standardCount 예시 { a: 3, n: 1, g: 1, r: 1, m: 1 }
```

---

#### 4. 비교 문자열 반복하며 값 비교

```js
for (const c of compareStr) {
  if (!standardCount[c]) return false;
  standardCount[c] -= 1;
}

return true;
```

- 객체가 갖고있는 value에서 -1
- 비교 문자열이 기준 문자열에 없는 값이 있는 경우 or 이미 0이 되어버린 경우 false 리턴
- 모든 조건이 통과한 경우 true 리턴
