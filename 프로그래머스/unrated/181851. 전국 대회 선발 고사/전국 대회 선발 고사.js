function solution(rank, attendance) {
    let num = []
    for(let i=0; i<attendance.length; i++){
        if(attendance[i] === true){
             num.push(i)
        }
    }
        // console.log(num)
        num.sort((a,b) => rank[a]-rank[b])
        let a = num[0]
        let b = num[1]
        let c = num[2]
        console.log(a,b,c)
    
        let result = 10000*a + 100*b + c
        return result
}
