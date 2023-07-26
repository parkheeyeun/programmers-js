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
    
    if(op === "+"){
        return a+b
    }else if(op === "-"){
        return a-b
    }else if(op === "*"){
        return a*b
    }
}

// 깔끔한 답안...
// const solution = (binomial) => {
//     const [num1,op,num2] = binomial.split(' ');
//     switch(op){
//         case '+':
//             return Number(num1)+Number(num2);
//         case '-':
//             return Number(num1)-Number(num2);
//         case '*':
//             return Number(num1)*Number(num2);
//     }
// }