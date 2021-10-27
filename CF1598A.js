let inputText = ''
process.stdin.on('data', c => inputText += c)

process.stdin.on('end', () => {

    const {EOL} = require('os')
    const lines = inputText.split(EOL) /*your input text, split by lines*/

    // console.log(lines);

    let pointer = 0;
    let k = parseInt(lines[pointer++]);
    outer : while (k -- > 0) {

        let len = parseInt(lines[pointer++]);
        let line1 = lines[pointer++];
        let line2 = lines[pointer++];

        // console.log("NO");
        for(let i = 0 ; i < len ; i++) {
            if(line1[i] === '1' && line2[i] === '1') {
                console.log("NO");
                continue outer;
            }
        }

        console.log("YES");
    }

    // [n, m, a] = inputText.split(' ');
    // let k1 = n / a;
    // let k2 = m / a;
    // console.log(Math.ceil(k1) * Math.ceil(k2))
})


