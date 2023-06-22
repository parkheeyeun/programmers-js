function solution(number, n, m) {
    if(number % n===0 && number % m === 0){
        answer =  1
    }else (answer =  0)
    
    return answer
}

// return (number%n ===0) ? (number%m===0) ? 1 : 0 : 0
// 삼항연산자 (조건1 ? (조건2? 조건2 참: 조건2 거짓): 조건1 거짓)