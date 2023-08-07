function solution(arr, delete_list) {
   let result = arr.filter((v) => !delete_list.includes(v))
   return result
}