function solution(names) {
    let fir = []
    for(let i=0; i<names.length; i++){
        if(i%5===0){
            fir.push(names[i])
        }
    }
    return fir
}