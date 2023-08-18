function solution(n) {
    let result = []
    for(let i=0; i<=n; i++){
       if(n%i === 0){
           result.push(i)
       }
    }
        // console.log(result)
        let answer = result.reduce((acc,cur) => acc+cur,0)
        return answer
}