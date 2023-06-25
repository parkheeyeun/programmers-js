function solution(num_list) {
    let sum = 0
    let multi = 1
    
   for(i=0; i < num_list.length; i++){
       sum += num_list[i]
   }
   
    for(i=0; i < num_list.length; i++){
        multi *= num_list[i] 
    }
    
    // console.log(multi)
    // console.log(Math.pow(sum, 2))
    return  multi < Math.pow(sum, 2)? 1:0
}