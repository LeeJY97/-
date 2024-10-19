function solution(left, right) {
    var answer = 0;
    
    var cnt = 0;
    var arr = [];
    
    
    for(var i=left; i<=right; i++){
        for(var index = 1; index <= i; index++){
            if(i % index == 0){
                cnt++;
            }
        }
        
        if(cnt % 2 == 0){
            arr.push(i);
        }else{
            arr.push(-i);
        }
        cnt = 0;
    }
    
    
    arr.forEach(function(number){
       answer += number; 
    });
    
    return answer;
}