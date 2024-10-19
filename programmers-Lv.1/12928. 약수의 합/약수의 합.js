function solution(n) {
    var answer = 0;
    
    for(var i=1; i<=n; i++){
        n % i == 0 ? answer+=i : '';
    }
    
    return answer;
}