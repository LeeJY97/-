function solution(arr)
{

    var answer = arr.filter((cur, idx, array) => {
        
        return cur != array[idx+1]
    })
    
    return answer
}