function solution(num_list) {
    let count = 0
   for(i=0; i<num_list.length; i++){
       // num_list가 1이 될때까지 while문을 실행
       while(num_list[i]!==1){
           if(num_list[i]%2===0){
             num_list[i] /= 2
           }else{
           num_list[i] = (num_list[i]-1)/2
         }
           count ++
     }
   }
    return count
}