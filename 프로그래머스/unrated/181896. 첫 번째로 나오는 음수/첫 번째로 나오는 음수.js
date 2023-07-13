function solution(num_list) {
    let num = [...num_list]
    for(i=0; i<num.length; i++){
        if(num[i] < 0){
            return i
        }
    }
    return -1
}