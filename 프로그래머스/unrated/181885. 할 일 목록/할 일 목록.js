function solution(todo_list, finished) {
    let not = []
    for(let i=0; i<todo_list.length; i++){
        if(finished[i] === false){
            not.push(todo_list[i])
        }
    }return not
}