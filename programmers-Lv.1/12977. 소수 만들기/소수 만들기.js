function solution(nums) {
    const n = nums.length;
    let count = 0;

 
    for(let i=0; i<n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=j+1; k<n; k++){
                if(isPrime(nums[i] + nums[j] + nums[k])){
                    count++;
                }
            }
        }
    }

    return count;
}

function isPrime(sum){
    for(i=2; i<=sum**0.5; i++){
        if(sum%i == 0){
            return false;
        }
    }

    return true;
}