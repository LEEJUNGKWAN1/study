const fs = require("fs");
const input = fs
  .readFileSync("JUNGKWAN/2309.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
//('/dev/stdin')

console.log(baekJoon(input).join("\n"));

function baekJoon(numbers) {
  for (let i = 0; i < 9; i++) {
    //첫 번째로 제외할 숫자의 인덱스 i를 0부터 8까지 반복
    for (let j = i + 1; j < 9; j++) {
      //두 번째로 제외할 숫자의 인덱스 j를 i보다 큰 값부터 8까지 반복
      const selected = numbers.filter((_, idx) => idx !== i && idx !== j);
      //numbers 배열에서 인덱스가 i와 j가 아닌 원소들만 골라 새로운 배열 selected에 담는다
      const sum = selected.reduce((acc, val) => acc + val, 0);
      //배열을 순회하면서 누적값(acc)에 각 요소(val)를 더함
      //선택된 7개의 숫자를 모두 더해서 sum에 저장

      if (sum === 100) {
        return selected.sort((a, b) => a - b);
        // 조건을 만족하면 오름차순 정렬 후 리턴
      }
    }
  }
}
