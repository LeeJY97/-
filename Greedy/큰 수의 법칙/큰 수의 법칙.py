def solution(arr, M, K):
  arr.sort()

  first, second = arr[-1], arr[-2]

  result = 0
  while True:
    for _ in range(K):
      if M == 0:
        break
      result+=first
      M -= 1
    if M == 0:
      break
    result+=second
    M -= 1
    
  return result


a = solution([2, 4, 5, 4, 6], 8, 3)
print(a)