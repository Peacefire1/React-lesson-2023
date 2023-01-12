function findMax() {
    return Math.max(a, b)
}


console.log(findMax(1, 2));

function findNumberInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return i
        }

    }
    return -1;

}

const a = [1, 2, 4, 5]
const b = ["a", "b", "c", "d"]

console.log(findNumberInArray(a, 6));
console.log(findNumberInArray(a, 4));
console.log(findNumberInArray(b, "a"));
console.log(findNumberInArray(b, "e"));


function randomNumber(a, b) {
    const c = Math.floor(Math.random(a, b) * (max - min + 1) + min)
    return c
}


console.log(randomNumber(2, 5)); // 3

let sum = 0;

function findAverage(arr) {
    arr.map(n => {
        sum += n
    })
    return sum / arr.length
}

function strToLowerCase(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase()
    }
    return arr
}

