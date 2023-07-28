function solution(arr) {
    let pow = 1
    // pow를 2의 거듭제곱으로 만든다
    while(pow < arr.length){
        pow *= 2
     }
    // pow와 length를 비교해서 작은 경우만 0을 추가한다
    while(arr.length < pow){
        arr.push(0)
    }
    return arr
}