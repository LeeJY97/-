function solution(k, m, score) {
    score = score.sort((a, b) => b - a).slice(0, score.length - (score.length % m));

    let sum = 0;
    for (let i = 0; i < score.length; i += m) {
        sum += score.slice(i, i + m).sort()[0];
    }

    return sum * m;
}