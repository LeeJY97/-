function solution(d, budget) {
    const arr = d.sort((a, b) => a - b);
    
    var cnt = 0;
    var sum = 0;
    
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
        
        if(sum>budget){
            break;
        }
        cnt++;   
    }
    
    return cnt;

}