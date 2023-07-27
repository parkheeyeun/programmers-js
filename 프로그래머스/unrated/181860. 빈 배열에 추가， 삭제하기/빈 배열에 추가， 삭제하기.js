function solution(arr, flag) {
   let X = []
   for(let i=0; i<flag.length; i++){
    if(flag[i]===true){        
        for(let j=0; j<2; j++){
            for(let l=0; l<arr[i]; l++){
                X.push(arr[i])}
        }
    }else{
            for(let k=0; k<arr[i]; k++){
                X.pop()}
    }
    }return X
}