function solution(todo_list, finished) {
    let not = []
    let todo = [...todo_list]
    for(let i=0; i<todo_list.length; i++){
       todo_list[i] = finished[i]
        if(todo_list[i] === false){
            not.push(todo[i])
        }
    }return not
}