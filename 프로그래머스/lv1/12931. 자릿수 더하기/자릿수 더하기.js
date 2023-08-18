function solution(n){
    let sum = 0
    let N = String(n)
    // console.log(Array(N))
    for(let i=0; i<N.length; i++){
      sum += Number(N[i])
    } 
    return sum
}