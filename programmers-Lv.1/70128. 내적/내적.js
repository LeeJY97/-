function solution(a, b) {
    var cnt = a.length;
    var answer = 0;
    
    for(i=0; i<cnt; i++){
        answer += a[i] * b[i];
    }
    
    return answer;
}