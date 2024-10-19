function solution(n) {
    var answer = '';
    var cnt = 0;
    
    for(i=0; i<n; i++){
        if(cnt%2 == 0){
            answer += '수';
        }else{
            answer += '박';
        }
        cnt++;
    }
    
    return answer;
}