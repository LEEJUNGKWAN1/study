const fs = require("fs");
const input = fs.readFileSync("JUNGKWAN/6131.txt").toString().split("\n");
//const input = fs.readFileSync('/dev/stdin').toString().split("\n");

console.log(baekJoon(parseInt(input)));

function baekJoon(N) {
  let A, B;
  let count = 0; //쌍의 개수를 저장할 변수를 0으로 초기화
  for (let i = 1; i <= 500; i++) {
    //i를 500까지 반복하며 A에 할당
    A = i;
    for (let j = 1; j <= 500; j++) {
      //j를 500까지 반복하며 B에 할당
      B = j;
      if (A > B && A * A === B * B + N) {
        count++; //A의 제곱이 B의 제곰 + N 이면 카운트
      }
    }
  }
  return count;
}

// function baekJoon(N) { //N을 입력으로 받아 조건을 만족하는 (A, B) 쌍의 개수를 세는 함수
//   let count = 0; //쌍의 개수를 저장할 변수를 0으로 초기화

//   // A*A = B*B + N
//   // 제곱의 차 공식  >>  (A-B)(A+B) = N  >>  x*y = N
//   // A = (x+y)/2, B = (y-x)/2

//   for (let x = 1; x * x <= N; x++) {
//   //x는 N의 약수를 찾기 위한 첫 번째 수
//   //x * x <= N인 이유는, 약수쌍 (x, y)에서 x < y이므로 절반까지만 보면 중복 방지
//     if (N % x === 0) {
//       //x가 N의 약수인 경우만 진행
//       let y = N / x;

//       //x < y 이고, x+y와 y-x가 짝수여야 A, B가 정수
//       if ((x + y) % 2 === 0 && (y - x) % 2 === 0) {
//       //A와 B가 정수가 되기 위한 조건
//         let A = (x + y) / 2;
//         let B = (y - x) / 2;

//         if (B >= 1 && A <= 500) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// }
