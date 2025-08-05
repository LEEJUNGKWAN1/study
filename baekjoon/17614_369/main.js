const fs = require("fs");
const input = fs
  .readFileSync("baekjoon/17614_369/input.txt")
  .toString()
  .split("\n");

const N = parseInt(input); //input은 문자열이므로 숫자(정수)로 변환

function count369(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    //for문을 사용하여 i = 1부터 i <= N까지 반복
    let str = i.toString(); //현재 숫자 i를 toString()으로 문자열로 변환
    for (let char of str) {
      //문자열의 각 문자(char)를 하나씩 검사
      if (char === "3" || char === "6" || char === "9") {
        count++; //'3', '6', '9'를 만나면 count 1 증가
      }
    }
  }
  return count;
}

console.log(count369(N));

// 입력 -> (정수 변환) -> (1부터 N까지 반복) -> (숫자 하나씩 쪼개기) ->
// ('3'/'6'/'9' 발견하면 카운트 증가) -> (최종 총합 출력)
