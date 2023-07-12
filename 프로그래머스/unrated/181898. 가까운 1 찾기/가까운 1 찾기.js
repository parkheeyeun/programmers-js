function solution(arr, idx) {
    for(let i=0; i<arr.length; i++){
        // console.log(idx<=arr[i]&&arr[i] ===1)
        if(idx<=i && arr[i]==1){
           return i
        }
    }
  return -1
}
