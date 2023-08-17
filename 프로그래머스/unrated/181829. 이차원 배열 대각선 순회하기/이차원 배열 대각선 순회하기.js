function solution(board, k) {
    let arr = []
   for(let i=0; i<board.length; i++){
       for(let j=0; j<board[0].length; j++){
           if(i+j <= k){
               arr.push(board[i][j])
           }
       }
   }
    let result = arr.reduce((acc,cur) => acc+cur)
    return result
}