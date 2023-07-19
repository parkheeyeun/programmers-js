function solution(myString, pat) {
    const result = new RegExp(pat,"i")
    return result.test(myString) ? 1:0
}