function solution(num_list, n) {
    let after = num_list.slice(n)
    let before = num_list.slice(0,n) 
    return [...after,...before]
    }