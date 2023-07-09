function solution(my_string, s, e) {
    let st = [...my_string]
    let str = st.slice(s,e+1)
    let rstr = str.reverse().join('')
    st.splice(s,e-s+1,rstr)
    return st.join('')
}
