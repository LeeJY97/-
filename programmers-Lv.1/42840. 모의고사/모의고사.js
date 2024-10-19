function solution(answers) {
    var stu = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]

    var count = [0, 0, 0];
    

    for(var i=0; i<answers.length; i++){

        for(var j=0; j<3; j++){

            if(stu[j].length < answers.length){
                stu[j] = stu[j].concat(stu[j]);
            }

            if(answers[i] === stu[j][i]) {
                count[j]++;
            }
        }
    }

    var idxArray = count.map((value, index) => ({'value': value, 'index': index+1})).sort((a, b) => b.value - a.value);

    var rank = [idxArray[0].index];

    for(let i=1; i<idxArray.length; i++){
        if(idxArray[0].value <= idxArray[i].value){
            rank.push(idxArray[i].index);
        }
    }
    
    return rank;

}