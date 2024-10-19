function solution(s) {
    var arr = s.split(' ');
    var result = [];

    for(let i=0; i<arr.length; i++){
        let str = '';
        for(let j=0; j<arr[i].length; j++){
            if(j%2 == 0){
                str += arr[i][j].toUpperCase();
            }else{
                str += arr[i][j].toLowerCase();
            }
        }
        result.push(str);
    }
    
    return result.join(' ');
}