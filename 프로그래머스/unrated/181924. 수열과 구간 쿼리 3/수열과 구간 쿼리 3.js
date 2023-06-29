function solution(arr, queries) {
  for (let k = 0; k < queries.length; k++) {
    const [index1, index2] = queries[k];
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
  return arr;
}