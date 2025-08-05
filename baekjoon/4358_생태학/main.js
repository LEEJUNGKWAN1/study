const fs = require("fs");
const input = fs
  .readFileSync("baekjoon/4358_생태학/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const counts = {}; //counts: 각 나무 종의 이름을 키로 하고, 개수를 값으로 저장할 객체
let total = 0; //total: 전체 나무의 총 개수를 저장할 변수

for (let line of input) {
  //입력을 한 줄 받으면 이 함수가 실행
  const tree = line.trim(); //line.trim() : 줄 앞뒤의 공백 제거 후 tree 변수에 저장
  if (!tree) return; //빈 줄이면 무시하고 다음 줄로 넘어감

  counts[tree] = (counts[tree] || 0) + 1; //이미 등록된 종이면 1을 더하고 처음 등장한 종이면 0에서 시작해 1로 등록
  total++;
}

Object.keys(counts) //Object.keys(counts) : 종 이름들만 배열로 가져옴
  .sort() //.sort() : 종 이름을 사전순 정렬
  .forEach((tree) => {
    //.forEach(...): 각 종에 대해 아래 작업을 반복
    const percentage = ((counts[tree] / total) * 100).toFixed(4); //해당 종이 전체에서 차지하는 백분율을 구함
    console.log(`${tree} ${percentage}`); //결과를 "종이름 백분율" 형식으로 출력
  });
