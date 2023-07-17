function solution(num_list) {
    let even = [] 
    let esum = 0
    let odd = []
    let osum = 0
    for(let i=0; i<num_list.length; i++){
        if(i%2===0){
           even.push(num_list[i])
        }else{
            odd.push(num_list[i])
        }
    }
    for(let j=0; j<even.length; j++){
        esum += even[j]
    }
    for(let j=0; j<odd.length; j++){
        osum += odd[j]
    }
    return osum > esum ? osum : esum
}