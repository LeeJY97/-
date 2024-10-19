function solution(s) {
    var len = s.length;
    var isEven = len % 2 == 0;
    
    return isEven ? s.charAt(len/2-1) + s.charAt(len/2) : s.charAt(len/2);
}