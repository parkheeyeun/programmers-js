function solution(arr, n) {
    if(arr.length % 2 !== 0){
        for(let i=0; i<arr.length; i+=2){
            arr[i] += n
        }
    }else{
        for(let i=0; i<arr.length; i++){
            if(i%2 !==0){
                arr[i] += n
            }
        }
    }
    return arr
}

// map을 이용한 방법도 있다..
// return arr.length % 2 == 0 
//        ? arr.map((e,idx) => idx % 2 != 0 ? (e + n) : e)
//        : arr.map((e,idx) => idx % 2 == 0 ? (e + n) : e)