function solution(intStrs, k, s, l) {
    const arr = []
    
    for(i=0; i<intStrs.length; i++){
        let str = intStrs[i]
        let num = str.slice(s,s+l)
        if(Number(num) > k){
            arr.push(Number(num))
        }
    }
    return arr
}