function solution(a, b) {
    if(a % 2 !==0 && b % 2 !==0){
        return Math.pow(a,2)+Math.pow(b,2)
    }else if(a % 2 !==0 || b % 2 !==0){
        return 2*(a+b)
    }else{
        return Math.abs(a-b)
    }
    
// 간단한 방법
//     const isAOdd = a % 2 === 1
//     const isBOdd = b % 2 === 1

//     if(isAOdd && isBOdd) return Math.pow(a, 2) + Math.pow(b, 2)
//     if(!isAOdd && !isBOdd) return Math.abs(a - b)
//     return 2 * (a + b)
}