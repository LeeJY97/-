function solution(arr) {
    
    return arr.reduce((acc, current) => acc + current, 0) / arr.length;
    
}