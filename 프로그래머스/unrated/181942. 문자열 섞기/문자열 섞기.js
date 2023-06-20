function solution(str1, str2) {
    var answer = ''
    var str = [...str1]
    
    answer = str.map((i,j) =>{
        return i+str2[j]
    }).join('')
    
    return answer
}