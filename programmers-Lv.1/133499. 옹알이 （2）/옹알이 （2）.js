function solution(babbling) {

    const copyBabbling = babbling.map(speak => {
        return speak.replaceAll('aya', 'A').replaceAll('ye', 'Y').replaceAll('woo', 'W').replaceAll('ma', 'M');
    })

    const count = copyBabbling.reduce((acc, cur) => {
        if (cur === cur.toUpperCase() && !cur.includes('AA') && !cur.includes('YY') && !cur.includes('WW') && !cur.includes('MM')) {
            return acc + 1;
        }

        return acc + 0;
    }, 0)

    return count;
}
