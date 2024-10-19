function solution(s) {
    var answer = "";
    
    var alphabat = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i=0; i<s.length; i++) {
        if(!isNaN(parseInt(s[i]))){
            answer += s[i];
        }
        
        for(let j=3; j<=5; j++){
            let char = s.substring(i, i+j);
            
            for(let k=0; k<alphabat.length; k++){
                if(char === alphabat[k]){
                    answer += k;
                    i += j-1;
                }
            }
        }
        
    }

    return BigInt(answer);
}