function solution(my_string, overwrite_string, s) {
    const str = [...my_string]
//  문자열을 배열로 바꾸어주기
    str.splice(s,overwrite_string.length,overwrite_string)
//  배열.splice(시작 index, 바꿀갯수, 추가할 요소)
    return str.join('')
//  arr.join(요소구분 문자열)
}