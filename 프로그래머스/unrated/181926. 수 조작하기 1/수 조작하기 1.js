function solution(n, control) {
    let len = control.length
   for(i=0; i < control.length; i++){
        let str = control[i]
       
       if(str === "w"){
            n += 1
       }else if(str === "s"){
           n -= 1
       }else if(str === "d"){
           n += 10
       }else if(str === "a"){
           n -= 10
       }
   }
    return n
}