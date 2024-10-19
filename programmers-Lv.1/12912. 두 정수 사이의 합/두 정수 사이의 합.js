function solution(a, b) {
    
    //  (수의 갯수) * (끝수+첫번째 수) / 2
    return (Math.abs(a - b) + 1) * (b+a) / 2;

}