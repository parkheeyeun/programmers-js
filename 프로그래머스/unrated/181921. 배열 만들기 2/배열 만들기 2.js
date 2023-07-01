function solution(l, r) {
  const answer = [];
  
  for (let i = l; i <= r; i++) {
    const num = i.toString();
    if (/^[05]+$/.test(num)) {
      answer.push(i);
    }
  }
  
  if (answer.length === 0) {
    answer.push(-1);
  }
  
  return answer;
}
