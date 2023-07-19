function solution(num_list) {
    let result = 1
   if(num_list.length >= 11){
       for(let i=0; i<num_list.length; i++){
           result += num_list[i]
       }
       result = result - 1
   }else{
       for(let i=0; i<num_list.length; i++){
            result *= num_list[i]        
       }   
   }
    return result
}