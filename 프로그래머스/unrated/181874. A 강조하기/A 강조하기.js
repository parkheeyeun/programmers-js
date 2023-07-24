function solution(myString) {
   myString = myString.toLowerCase()
   const str = /a/g
   myString = myString.replace(str,"A")
   return myString
}