test: node baekjoon/4358\_생태학/main.js

___

{} (객체) 사용
```js
const fs = require("fs");
const input = fs
  .readFileSync("baekjoon/4358_생태학/input.txt")
  .toString()
  .trim()
  .split("\n");

const counts = {};
let total = 0;

for (let line of input) {
  const tree = line.trim();
  if (!tree) return;

  counts[tree] = (counts[tree] || 0) + 1;
  total++;
}

Object.keys(counts)
  .sort()
  .forEach((tree) => {
    const percentage = ((counts[tree] / total) * 100).toFixed(4);
    console.log(`${tree} ${percentage}`);
  });
```
Map 사용
```js
const fs = require("fs");
const input = fs
  .readFileSync("baekjoon/4358_생태학/input.txt")
  .toString()
  .trim()
  .split("\n");

const counts = new Map();
let total = 0;

for (let line of input) {
  const tree = line.trim();
  if (!tree) continue;

  counts.set(tree, (counts.get(tree) || 0) + 1);
  total++;
}

[...counts.entries()]
  .sort((a, b) => a[0].localeCompare(b[0]))
  .forEach(([tree, count]) => {
    const percentage = ((count / total) * 100).toFixed(4);
    console.log(`${tree} ${percentage}`);
  });
```
{} (객체)와 Map은 모두 JavaScript에서 키-값 구조로 데이터를 저장하는 데 사용하지만, 사용하는 목적이나 특징이 다르다.

## Object와 Map의 차이점
|비교 항목|Object ({})|Map|
|-|-|-|
|키 타입|문자열 또는 심볼만 가능|모든 값 가능 (객체, 함수 등도 키로 사용 가능)|
|순서 보장|순서 보장 X (사전순 비슷하지만 명확하진 않음)|삽입 순서 유지|
|성능|작은 데이터에서 빠름|	대량 데이터에서 더 좋음|
|메서드|메서드가 적음 (Object.keys, Object.entries 등)|.set(), .get(), .has(), .forEach() 등 풍부|
|직관성|코드가 짧고 직관적|다양한 기능 제공하지만 약간 길어짐|

## 정리
|항목|Object {}|Map|
|-|-|-|
|코드 길이|더 짧음|약간 더 길음|
|직관성|간단한 경우 좋음|명확한 메서드로 실수 줄임|
|키 타입 제한|문자열만|모든 값 가능|
|정렬|Object.keys().sort() 필요|[...map.entries()].sort()로 유연함|
|성능|소규모에 적합|대규모 처리나 복잡한 키에 유리|

<br>

#### 예를 들어
#### API 응답 캐싱, 순서 유지 → Map이 좋음
#### 단순 카운트 → {}가 간단
