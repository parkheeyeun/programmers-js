function solution(a, b, c) {
    if(a != b && b != c && a != c){
       return a+b+c
    }else if((a == b && b != c) || (b == c && a != b) || (a == c && a != b)){
        return (a+b+c)*(Math.pow(a,2)+ Math.pow(b,2)+ Math.pow(c,2))
    }else{
        return (a+b+c)*(Math.pow(a,2)+ Math.pow(b,2)+ Math.pow(c,2))*(
        Math.pow(a,3)+ Math.pow(b,3)+ Math.pow(c,3))
    }
}

function solution(a, b, c) {
    let sum1 = a + b + c;   // 모두 다른 경우
    let sum2 = a * a + b * b + c * c;   // 2가지가 같은 경우
    let sum3 = a ** 3 + b**3 + c**3;    // 모두 같은 경우

    if (a === b && b === c)  // a===b이고 b===c이면 a===c는 증명할 필요 X
        return sum1*sum2*sum3;
     else if (a === b || a === c || b === c) 
        return sum1*sum2;
     else 
        return sum1;
}