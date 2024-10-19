function solution(food) {
    var answer = '';
    
    for(let i=1; i<food.length; i++){
        let loop = Math.floor(parseInt(food[i])/2)
        
        for(let j=0; j<loop; j++){
            answer += i;
        }
    }
    
    answer = answer + "0" + answer.split("").reverse().join('');
    
    return answer;
    
}