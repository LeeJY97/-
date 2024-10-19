function solution(n) {
    
    var arr = [];
    var str = "";
    var answer = 0;
    
    while(n > 0){
        arr.push(n%10);
        n = Math.floor(n/10);
    }

    var len = arr.length;
    
    for(var i=0; i<len; i++){
        for(var j=0; j<len -1 -i; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        } 
        str = arr[j] + str;
    }
    
    
    return Number(str);
}