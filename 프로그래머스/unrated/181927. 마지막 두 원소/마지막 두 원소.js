function solution(num_list) {
    let len = num_list.length
    let last_num = num_list.slice(-1)
    let last2_num = num_list.slice(-2)[0] // 원래 있던 배열을 변경하지 않고 추출하려면 slice
//     console.log(last_num)
//     console.log(last2_num)
    
    if(last_num > last2_num){
        num_list.push(last_num - last2_num)
    }else{
         num_list.push(last_num*2)
    } 
    return num_list
}