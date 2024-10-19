function solution(number, limit, power) {
    var answer = 0;
    for (let i = 1; i <= number; i++) {
        const divisor = getDivisorCount(i);
        if (divisor > limit) {
            answer += power;
        } else {
            answer += divisor;
        }
    }

    return answer;
}
function getDivisorCount(n) {
    let count = 0;
    const sqrtN = Math.sqrt(n);
    
    for (let i = 1; i <= sqrtN; i++) {
        if (n % i === 0) {
            count++; 
            if (i !== n / i) {
                count++;
             }
        }
    }

    return count;
}