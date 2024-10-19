function solution(age) {
    var year = new Date().getFullYear();
    return year - (age+1);
}