function solution(picture, k) {
    let result=[]
    picture.forEach(v=>{
        let repeat = [...v].map(v=>v.repeat(k)).join('')
        for(let i=0; i<k; i++){
            result.push(repeat)
        }
    })
    return result
}