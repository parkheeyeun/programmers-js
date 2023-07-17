function solution(num_list) {
    let esum = 0
    let osum = 0
    for(let i=0; i<num_list.length; i++){
        if(i%2===0){
           esum += num_list[i]
        }else{
           osum += num_list[i]
        }
    }
    
    return osum > esum ? osum : esum
}