function solution(s, n) {
    var answer = '';
    
    for(let i=0; i<s.length; i++){
        if(s[i] == ' '){
            answer += ' ';
            continue;
        }
        
        let m = 0;
        let code = s[i].charCodeAt(0);
        
        if(code >= 65 && code <= 90){
            if(code + n > 90){
                m = code + n - 91;
                answer += String.fromCharCode('A'.charCodeAt(0)+m);
                continue;
            }
            
        }else{
            if(code + n > 122){
                m = code + n - 123;
                answer += String.fromCharCode('a'.charCodeAt(0)+m);
                continue;
            }
        }
        answer += String.fromCharCode(s[i].charCodeAt(0)+n);
    }
    
    return answer;
}