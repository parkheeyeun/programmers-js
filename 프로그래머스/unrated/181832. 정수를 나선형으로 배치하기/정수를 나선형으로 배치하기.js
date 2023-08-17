function solution(n) {
    const arr = Array(n).fill().map(() => Array(n));
    let row=0,col=0,next=n-1,i = 1
    while(i<=Math.pow(n,2)){
      if (row === (n - 1) / 2 && col === (n - 1) / 2) {
        arr[row][col] = i++; // 중심에 값을 할당하고, 값을 증가
        }
        // 오른쪽으로 이동하면서 값 할당
        for(let j=0; j<next; j++){
            arr[row][col] = i++
            col++
        }
        // 아래쪽으로 이동하면서 값 할당
        for(let j=0;j<next;j++){
            arr[row][col] = i++
            row++
        }
        // 왼쪽으로 이동하면서 값 할당
        for(let j=0;j<next;j++){
            arr[row][col] = i++
            col--
        }
        // 위쪽으로 이동하면서 값 할당
        for(let j=0;j<next;j++){
            arr[row][col] = i++
            row--
        }
        next -= 2
        col++
        row++
    }
    return arr
}