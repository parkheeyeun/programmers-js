function solution(arr, k) {
    let ar = []
   for(let i=0; i<arr.length; i++){
       if(!ar.includes(arr[i])&& ar.length <k){
           ar.push(arr[i])  
       }
   }
    while(ar.length <k){
        ar.push(-1)               
   }
    return ar
}