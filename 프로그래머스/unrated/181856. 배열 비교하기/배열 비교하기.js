function solution(arr1, arr2) {
    if(arr1.length !== arr2.length){
        if(arr1.length > arr2.length){
            return 1
        }else{
            return -1
        }
    }else{
        let sum1 = 0
        let sum2 = 0
        let Sum1 = arr1.map((v) => sum1 += v)
        let Sum2 = arr2.map((v) => sum2 += v)
        if(sum1 > sum2){
            return 1
        }else if(sum1 < sum2){
            return -1
        }else{
            return 0
        }
    }
}