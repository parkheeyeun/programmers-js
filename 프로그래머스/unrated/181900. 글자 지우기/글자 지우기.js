function solution(my_string, indices) {
    let str = ""
    for(i=0; i<my_string.length; i++){
        // indices에 포함된 원소가 아니면 str에 삽입(=원하는 글자만 추가된다)
        if(!indices.includes(i)){
            str += my_string[i]
        }
    }
    return str
}