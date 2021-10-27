let inputText = ''
process.stdin.on('data', c => inputText += c)

process.stdin.on('end', () => {
    [n, m, a] = inputText.split(' ');
    let k1 = n / a;
    let k2 = m / a;
    console.log(Math.ceil(k1) * Math.ceil(k2))
})


