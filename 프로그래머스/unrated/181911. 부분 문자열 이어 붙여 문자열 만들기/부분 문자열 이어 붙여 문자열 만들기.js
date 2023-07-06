// function solution(my_strings, parts) {
//     return parts.map(([s, e], i) => {
//         return my_strings[i].slice(s, e + 1)
//     }).join('')
// }

function solution(my_strings, parts) {
    let arr = []
    for(i=0; i<my_strings.length; i++){
        let str = my_strings[i]
        let start = parts[i][0]
        let end = parts[i][1]
        arr.push(str.slice(start,end+1))
    }
        return arr.join('')
}