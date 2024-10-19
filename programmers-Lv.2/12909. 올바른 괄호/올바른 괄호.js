function solution(s) {
    const { length } = s;

    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += s[i] === '(' ? 1 : -1;
        if (sum < 0) return false;
    }

    return sum === 0;
}