function solution(s) {
    
    let x = s[0];
    let isInit = false;
    let [x_cnt, y_cnt, total_cnt] = [0, 0, 0];
    
    for(let i=0; i<=s.length; i++){
        
        if(isInit){
            i = 0;
            isInit = false;
        }
        
        if(x==s[i]){
            x_cnt++;
        }else{
            y_cnt++;
        }


        if(s.length == 1) {
            return ++total_cnt;
        }
        
        if(x_cnt == y_cnt){
            s = s.substring(i+1);
            total_cnt++;
            isInit = true;
            [x, x_cnt, y_cnt, i] = [s[0], 0, 0, 0]
        }
    }

    if(x_cnt != y_cnt) total_cnt++;
    
    return total_cnt;
}