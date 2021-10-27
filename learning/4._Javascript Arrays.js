var array1 = ['all','cows','are','big'];

for (var index in array1) {
    console.log(index);
    console.log(array1[index]);
}

for (var obj of array1) {
    console.log(obj);
}

array1.forEach( function (element, index){
    console.log(element);
});

//Spread Operator

function addFourNums(a, b, c, d) {
    return a + b + c + d;
}

function addFourNums1(... arr) {
    let sum  = 0;
    for(let i of arr) {
        sum += i;
    }
    return sum;
}

var numbers = [1, 2, 3, 4, 5, 6];
console.log(addFourNums1(...numbers)); // 10


let hashMap = {};
//why hashtable[currentElement] != undefined??


var M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

let i = 0;
let j = 0;
let cnt = 0;
let target = 20;
let level;
while (true) {
    //Move to right
    for ( ; i < 5; i++){
        console.log(M[i][j]);
    }
    j++;
    i--;

    for ( ; j < 4; j++){
        console.log(M[i][j]);
    }
    i--;
    j--;

    for ( ; i >= 0; i--){
        console.log(M[i][j]);
    }
    i++;
    j++;

    for( ; j >= 0; j--){
        console.log(M[i][j]);
    }
    j++;


}


// https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    let ans = [];

    if (matrix.length === 0) return ans;

    let row = matrix.length - 1;
    let col = matrix[0].length;

    let i = 0, j = -1;

    const matrixSize = (matrix.length) * matrix[0].length;
    let steps;
    while (ans.length < matrixSize) {

        steps = col;
        while (steps-- > 0) ans.push(matrix[i][++j]);

        if (ans.length === matrixSize) break;

        col--;

        steps = row;
        while (steps-- > 0) ans.push(matrix[++i][j]);
        row--;

        if (ans.length === matrixSize) break;

        steps = col;
        while (steps-- > 0) ans.push(matrix[i][--j]);
        col--;

        if (ans.length === matrixSize) break;

        steps = row;
        while (steps-- > 0) ans.push(matrix[--i][j]);
        row--;


        if (ans.length === matrixSize) break;

    }

    return ans;
};
// https://github.com/Apress/js-data-structures-and-algorithms
