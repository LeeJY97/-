function solution(price, money, count) {

    total = price * (count * (count+1) / 2);
    shortfallAmount = total - money;

    return shortfallAmount > 0 ? shortfallAmount : 0;

}