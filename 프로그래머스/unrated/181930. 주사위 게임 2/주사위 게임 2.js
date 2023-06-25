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