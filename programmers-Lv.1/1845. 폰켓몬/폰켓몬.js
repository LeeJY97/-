function solution(nums) {
  // 1. N/2(짝수) 
  const selectableCount = nums.length / 2
  
  // 2. 중복 제거
  const distinctNums = new Set([...nums]);

  return selectableCount >= distinctNums.size ? distinctNums.size : selectableCount
}