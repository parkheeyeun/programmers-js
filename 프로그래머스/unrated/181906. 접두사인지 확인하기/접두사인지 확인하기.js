function solution(my_string, is_prefix) {
    let str = []
    
    for(i=0; i<my_string.length; i++){
        str.push(my_string.slice(0,i))
    }
    if(str.some(str => str===is_prefix)){
        return 1
    }else{
        return 0
    }
}