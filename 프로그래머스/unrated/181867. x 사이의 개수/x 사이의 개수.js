function solution(myString) {
        let str = []
        let len = []
        str = myString.split("x")
        for(let i=0; i<str.length; i++){
            len.push(str[i].length)
        }
    return len
}