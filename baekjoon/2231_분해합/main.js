const fs = require("fs");
const input = fs
  .readFileSync("baekjoon/2231_분해합/input.txt")
  .toString()
  .split("\n");
//const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = parseInt(input); //input은 문자열이므로 숫자(정수)로 변환

function findConstructor(N) {
  const strN = N.toString(); //숫자 N을 문자열로 변환하여 자릿수를 구합니다.
  const start = Math.max(1, N - 9 * strN.length);
  //1부터 N-1까지 다 검사하면 비효율적이기 때문에 생성자 후보를 검사할 최소 시작값(start)을 정한다.
  //Math.max(1, ...): 음수가 되면 안 되므로 1보다 작으면 1로 설정

  for (let i = start; i < N; i++) {
    //start부터 N-1까지 반복
    let sum = i; //sum은 분해합을 저장하고 시작은 자기 자신인 i입니다.
    let digits = i.toString().split("").map(Number);
    //숫자 i를 문자열로 바꾸고 하나씩 쪼갠 후 배열의 각 원소(문자)를 숫자로 변환
    //예: i = 245 → 문자열 "245" → ['2', '4', '5'] → [2, 4, 5]

    for (let digit of digits) {
      sum += digit;
    }
    //각 자리수를 sum에 더해 분해합을 계산합니다.

    if (sum === N) {
      //만약 분해합이 N과 같다면 i는 생성자입니다.
      return i;
    }
  }

  return 0; // 생성자가 없는 경우
}

console.log(findConstructor(N));
