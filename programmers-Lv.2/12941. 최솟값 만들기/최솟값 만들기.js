function solution(a,b){
    a.sort((a, b) => a - b);
    b.sort((a, b) => b - a);
    
    const {length} = a;
    let sum = 0;
    
    for(let i=0; i<length; i++){
        sum += a[i] * b[i];
    }

    return sum;
}