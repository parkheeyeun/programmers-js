function solution(num_list) {
    let odd = []
    let even = []
    
    for(i=0; i<num_list.length; i++){
        if(num_list[i] % 2 === 1){
            odd.push(String(num_list[i])) 
            // 숫자를 이어붙이기 위해 문자열로 바꾸고 push해서 odd라는 새로운 배열을 생성
        }else{
           even.push(String(num_list[i]))
        }
    }
    
    odd_list = odd.join('') // 이어붙이는 작업
    even_list = even.join('')
    return Number(odd_list) + Number(even_list) // 다시 숫자로 바꾸어준다
}