function solution(my_string, queries) {
    for(i=0; i<queries.length; i++){
        let start = queries[i][0]
        let end = queries[i][1]
        
        let str = my_string.slice(start,end+1)
        let rstr = str.split('').reverse().join('')
        
        // slice(0,start): 0부터 start직전까지
        // slice(end+1): end+1이후부터 끝까지
        my_string = my_string.slice(0,start)+rstr+my_string.slice(end+1)
    }
    return my_string
}