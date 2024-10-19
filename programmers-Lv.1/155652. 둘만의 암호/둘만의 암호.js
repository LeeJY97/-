function solution(s, skip, index) {
    const skipSet = new Set(skip);

    const validEnd = (char) => {
        if (char > 'z') {
            char = 'a'
        }
        return char;
    }
    const shiftChar = (char) => {
        console.log('char', char)
        let count = index;
        for (let i = 0; i < count; i++) {

            char = validEnd(String.fromCharCode(char.charCodeAt(0) + 1))


            if (skipSet.has(char)) {
                count++;
            }
        }

        console.log('char2 : ', char)
        return char;
    }
    let answer = ''

    for (let i = 0; i < s.length; i++) {
        answer += shiftChar(s[i]);
    }

    return answer;
}
