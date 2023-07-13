function solution(arr, intervals) {
    let finter = []
    let tinter = []
    for(i=0; i<=1; i++){
        finter.push(intervals[0][i])
        tinter.push(intervals[1][i])
    }
        let result = []
    
    for(n=finter[0]; n<finter[1]+1; n++){
        result.push(arr[n])
    }
    
    for(n=tinter[0]; n<tinter[1]+1; n++){
        result.push(arr[n])
    }
    return result
}