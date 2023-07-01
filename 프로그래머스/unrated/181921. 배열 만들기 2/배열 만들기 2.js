function solution(l, r) {
  const answer = [];
  
  for (let i = l; i <= r; i++) {
     const num = i.toString();
      // 정규식은 슬래쉬로 감싸서 사용한다
      // ^은 문자의 시작을 나타낸다
      // $는 문자열의 끝을 나타낸다
      // [] 안에 있는 것과 일치하는지 검사
    if (/^[05]+$/.test(num)) {
      answer.push(i);
    }
  }
  
  if (answer.length === 0) {
    answer.push(-1);
  }
  
  return answer;
}
