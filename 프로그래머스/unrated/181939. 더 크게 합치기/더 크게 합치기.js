function solution(a, b) {
    let result = 0
    let ab = a.toString() + b.toString()
    let ba = b.toString() + a.toString()
    let abNum = Number(ab)
    let baNum = Number(ba)   
    if(abNum >= baNum) {
        result = abNum
    }else result = baNum
    return result    
}
