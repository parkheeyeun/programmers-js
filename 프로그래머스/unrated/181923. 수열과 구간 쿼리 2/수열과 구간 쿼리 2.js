function solution(arr, queries) {
    // 쿼리의 비교결과를 담을 빈배열
    var answer = [];
    
    // queries배열의 각 요소에 대해 반복
    // 시작인덱스 s, 끝인덱스 e, 비교인덱스 k
    for(let [s,e,k] of queries){
        // filter로 필터링 
        // 요소의 인덱스가 s보다 크고 e보다 작다
        // 요소의 값이 k보다 크다
        // 필터링 배열을 오름차순으로 정렬
        // 정렬 배열의 첫번째 요소를 temp에 저장
        let temp = arr.filter((v,i)=>(i>=s&&i<=e&&v>k)).sort((a,b)=>a-b)[0]
        // answer배열에 값 추가
        answer.push(temp ? temp:-1)
    }

    return answer;
}


