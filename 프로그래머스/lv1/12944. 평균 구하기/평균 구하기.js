function solution(arr) {
    let result =  arr.reduce((acc,cur) => acc+cur, 0)
    return result / arr.length
}