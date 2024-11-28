def solution(n, k):
  count = 0

  # 1. k가 n보다 클 경우 나누기 수행하지 않고 n과 1의 차이만큼 반환
  if(n < k):
    count = n - 1
    return count

  while(n > 1):
    # 2. n이 k의 배수가 아닌 경우 1씩 뺄셈
    if(n % k != 0):
      n-=1
      count+=1

    # 3. n이 k의 배수인 경우 n / k
    else:
      n /= k
      count+=1


  return count

# n, k = map(int, input().split())

# n, k = 17, 4
n, k = 5, 6

a = solution(n, k)
print(a)
