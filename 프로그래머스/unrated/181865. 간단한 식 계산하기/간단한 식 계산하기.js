function solution(binomial) {
   if(binomial.includes("+")){
       op = "+"
   }else if(binomial.includes("-")){
        op = "-"
   }else if(binomial.includes("*")){
       op = "*"
   }
    
    let a = Number(binomial.split(op)[0])
    let b = Number(binomial.split(op)[1])
    let result 
    
    if(op === "+"){
        result = a+b
    }else if(op === "-"){
        result = a-b
    }else if(op === "*"){
        result = a*b
    }
    return result
}