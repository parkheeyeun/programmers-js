function solution(num_list) {
    let odd = []
    let even = []
    
    for(i=0; i<num_list.length; i++){
        if(num_list[i] % 2 === 1){
            odd.push(String(num_list[i]))
        }else{
           even.push(String(num_list[i]))
        }
    }
    odd_list = odd.join('')
    even_list = even.join('')
    return Number(odd_list) + Number(even_list)
}