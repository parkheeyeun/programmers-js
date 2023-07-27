function solution(myStr) {
    let reg = /[a|b|c]/g
    if(myStr.split(reg).filter(str => str).length === 0){
        return Array("EMPTY")
    }else{
        return myStr.split(reg).filter(str => str)
    }
}