function solution(myString) {
   return myString.split("x").map((v) => v.length!==0? v:null).filter((v) => v !== null).sort()
}