function solution(num_str) {
    let n = []
    for(let i=0; i<num_str.length; i++){
        n.push(num_str[i])
    }
    return n.reduce((acc, cur) => acc+parseInt(cur),0)
}