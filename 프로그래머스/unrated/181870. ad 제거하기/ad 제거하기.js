function solution(strArr) {
    for(let i=0; i<strArr.length; i++){
        if(strArr[i].includes("ad")===true){
             strArr.splice(i,1)
             // 요소를 제거하면 배열의 길이가 하나 줄어들기 때문에 i--를 해준다
             i--
        }
    }return strArr
}
