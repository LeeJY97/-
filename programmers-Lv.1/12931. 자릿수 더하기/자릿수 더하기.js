function solution(n)
{
    var str = n.toString();
    var answer = 0;
    
    for(var i=0; i<str.length; i++){
        answer += Number(str[i]);
    }
    
    return answer;
}