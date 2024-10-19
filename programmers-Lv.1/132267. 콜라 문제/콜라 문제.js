function solution(a, b, n) {
    let [remainder, total] = [0, 0]
    let multiplier = b;
    
    while(n >= a){
        
        
        total += (Math.floor(n / a)) * multiplier
        remainder = n % a 
        
        n = Math.floor(n / a) * multiplier +  remainder
    }
    
    return total;
    
}