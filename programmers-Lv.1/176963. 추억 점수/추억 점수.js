function solution(name, yearning, photo) {
    const answer = [];
    const people = {};
    
    name.forEach((cur, idx) => {
            people[cur] = yearning[idx]
    })
    
    for(let i=0; i<photo.length; i++){
        let sum = 0;
        for(let j=0; j<photo[i].length; j++){
            sum += people[photo[i][j]] ?? 0;
        }
        answer.push(sum);
    }
   
    return answer;
}