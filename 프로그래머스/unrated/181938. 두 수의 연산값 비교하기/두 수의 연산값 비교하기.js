function solution(a, b) {
    let result = 0
    let ab = a.toString()+b.toString()
    let dab = 2*a*b
    let abnum = Number(ab)
    
    if(abnum >= dab){
        result =  abnum
    }else(result =  dab)
    return result
}