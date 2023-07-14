function solution(num_list, n) {
    let arr = []
    
    for(i=0; i<num_list.length; i+=n){
       arr.push(num_list[i])
    }
    return arr
}

// fiter를 사용하는 방법
// num_list.filter((_,i) => i%n===0)
// i를 n으로 나눈것이 0이면 해당하는 것만 배열에 담는다
