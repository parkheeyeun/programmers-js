function solution(q, r, code) {
    let arr = []
    for(let i=0; i<code.length; i++){
        if(i%q === r){
           arr.push(code[i])
        }
    }
    return arr.join('')
}