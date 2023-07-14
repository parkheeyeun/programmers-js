function solution(num_list, n) {
    let after = num_list.slice(n)
    let before = num_list.slice(0,n) 
    return [...after,...before]
    }

// num_list.unshift(...num_list.splice(n));
// 이렇게도 가능하다...
