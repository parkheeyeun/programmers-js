function solution(arr) {
    let x = 0
    while(true) {
        const array =  arr.map(num => {
         if(num>=50 && num%2===0) return num/2
         else if(num<50 && num&2 !==0) return num*2+1
         return num
       })
        const arrx = arr.every((num,i) => num === array[i])
        if(arrx) break
        x+=1
        arr = array
    }
    return x
}

