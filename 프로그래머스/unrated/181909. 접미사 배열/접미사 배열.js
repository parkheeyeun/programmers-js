function solution(my_string) {
    const str = []
    for(i=0; i<my_string.length; i++){
        str.push(my_string.slice(i))
    }
    let arr =  str.sort()
    return arr
}
