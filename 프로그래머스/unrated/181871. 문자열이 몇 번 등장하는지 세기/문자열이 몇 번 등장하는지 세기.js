function solution(myString, pat) {
    let count = 0
   for(let i=0; i<=myString.length-pat.length; i++){
       let str = myString.slice(i,i+pat.length)
       if(str === pat){
           count ++
       }
   }return count
}