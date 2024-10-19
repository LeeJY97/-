function solution(n, m) {
    var answer = []


    for(var i=m; i>0; i--){
        if(n % i == 0 && m % i == 0){
            answer.push(i);
            break;
        }
    }

    i = 0;

    while(true){
        if(i % n == 0 && i % m == 0 && i != 0){
            answer.push(i);
            break;
        }
        i +=n;
    }
    return answer;
}