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
}