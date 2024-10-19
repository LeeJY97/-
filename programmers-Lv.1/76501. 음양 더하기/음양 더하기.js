function solution(num, signs) {
    var answer = 123456789;
    
    answer = num.reduce(function(acc, value, idx){
                
        if(signs[idx]){
            console.log(value)
            return acc + value
        }else{
            console.log(-value)
            return acc + -value
        }
    } , 0)
    
    return answer;
}