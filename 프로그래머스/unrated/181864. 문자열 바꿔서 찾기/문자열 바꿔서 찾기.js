function solution(myString, pat) {
  let result = [...myString].map((v) => v==="A"? v="B":v="A").join('')
  if(result.includes(pat)===true){
      return 1
  }else{
      return 0
  }

}