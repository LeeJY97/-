function solution(x) {
    var arr = (x+"").split('');
    var sum = arr.reduce((acc, cur) => acc + Number(cur), 0);
    
    return x % sum == 0;
}