function solution(my_string, is_suffix) {
    const str = []
    
    for(i=0; i<my_string.length; i++){
     str.push(my_string.slice(i))
    }
    console.log(str)
    console.log(is_suffix)
    if(str.some(str => str === is_suffix)){  
        return 1
    }else{
        return 0
    }
    
}