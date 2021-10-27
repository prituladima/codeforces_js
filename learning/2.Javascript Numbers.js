console.log(
    [
        Math.floor(0.9), // 0
        Math.floor(1.1), // 1
        Math.round(0.49), // 0
        Math.round(0.5), // 1
        Math.round(2.9), // 3
        Math.ceil(0.1), // 1 Math.ceil(0.9), // 1 Math.ceil(21), // 21 Math.ceil(21.01), // 22
    ]
)

function numberEquals(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}

console.log(numberEquals(0.1 + 0.2, 0.3)); // true


let min  = Number.MAX_SAFE_INTEGER;
let arr = [1, 2, -5, 9, 1000, -90];
for(let i = 0 ; i < arr.length ; i ++) {
    min = Math.min(min, arr[i]);
}

console.log(min);
