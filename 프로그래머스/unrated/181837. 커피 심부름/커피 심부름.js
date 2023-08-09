function solution(order) {
   for(let i=0; i<order.length; i++){
       if(order[i].includes("americano")){
           order[i] = 4500
       }else if(order[i].includes("cafelatte")){
           order[i] = 5000
       }else{
           order[i] = 4500
       }
   }
    return order.reduce((acc,cur) => acc+cur)
}