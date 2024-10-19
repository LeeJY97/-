function solution(num) {
    var idx = 0;
    
    while(num != 1){
        let isEven = (num % 2 == 0);
        
        num = isEven ? num / 2 : (num * 3) + 1;
        
        idx++
    }
    
    return idx < 500 ? idx : -1;
}