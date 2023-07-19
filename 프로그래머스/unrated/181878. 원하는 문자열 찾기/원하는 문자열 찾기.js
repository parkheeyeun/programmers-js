function solution(myString, pat) {
    const result = new RegExp(pat,"i")
    return myString.match(result) ? 1 : 0
}