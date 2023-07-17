function solution(arr, queries) {
    let s
    let e
    for(let i=0; i<queries.length; i++){
        let s = queries[i][0]
        let e = queries[i][1]
        for(let i=s; i<=e; i++){
            arr[i] += 1
        }
    }
    return arr
}