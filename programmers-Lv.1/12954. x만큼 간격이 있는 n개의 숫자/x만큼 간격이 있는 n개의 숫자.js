function solution(x, n) {
    var answer = [];
    var count = 0;
    
    for(var i=0; i<n; i++){
        answer.push(count +=x);
    }
    
    return answer;
}