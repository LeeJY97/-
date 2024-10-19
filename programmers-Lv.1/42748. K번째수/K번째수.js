function solution(array, commands) {
    var answer = [];
    let arr = [];
    
    for(let i=0; i<commands.length; i++){
        let startIdx = commands[i][0];
        let endIdx = commands[i][1];
        let target = commands[i][2]-1
        
        arr = array.filter((cur, idx) => idx >= startIdx-1 && idx < endIdx)
        answer.push(arr.sort((a,b) => a - b)[target]);
        
        console.log(answer)
    }
    return answer;
}