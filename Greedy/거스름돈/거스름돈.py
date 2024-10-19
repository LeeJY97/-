def solution(n, coin_types):
    count = 0

    for coin in coin_types:
        count += n // coin
        n %= coin

    return count

print(solution(1260, [500, 100, 50, 10]))
