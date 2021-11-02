function go (i, n) {
    if (i <= n) {
        go(i + 1, n);
        console.log(i);
    }
}

go (0, 20);


function getNthFiboBetter (n) {
    let f = 1, s = 1;
    if(n <= 2) {
        return 1;
    }
    for(let i = 3; i <= n; i++) {
        let buf = f + s;
        f = s;
        s = buf;
    }
    return s;

}
console.log('')
console.log('')
console.log('')
console.log('')
console.log(getNthFiboBetter(7));
