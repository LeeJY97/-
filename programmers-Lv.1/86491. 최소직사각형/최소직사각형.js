function solution(sizes) {
    var answer = 0;

    var copy = [];
    // sizes = sizes.map(arr => {
    //     return arr.slice().sort((a, b) => b - a);
    // })
    
    sizes = sizes.map(arr => {
        return arr.sort((a, b) => b - a);
    })
    
    
    copy = sizes;
    var mw = copy.sort((a,b) => b[0] - a[0])[0][0];

    copy = sizes;
    var mh = copy.sort((a,b) => b[1] - a[1])[0][1];
    
    
    return mw * mh;
}