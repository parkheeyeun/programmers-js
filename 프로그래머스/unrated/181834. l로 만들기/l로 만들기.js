function solution(myString) {
    let result=''
    // 아스키코드에서 l의 값     
    let ascl = 'l'.charCodeAt()
    
    for(let i=0; i<myString.length; i++){
        if(myString.charCodeAt(i) < ascl){
            result += 'l'
        }else{
            result += myString[i]
        }
    }
    return result

    // 정규식을 활용한 문제풀이 [a-l]사이에 있는 문자를 찾아서 l로 바꿔준다
    let answer = myString.replace(/[a-l]/gi,'l');
    return answer;
}