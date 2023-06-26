function solution(numLog) {
   let control = ""
   
    for(i=1; i<numLog.length; i++){
       let num = numLog[i] - numLog[i-1]
        if(num === 1){
            control += "w"
        }else if(num === -1){
            control += "s"
        }else if(num === 10){
            control += "d"
        }else{
            control += "a"
        }
    }
   return control     
}