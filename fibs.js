// Using iteration, write a function fibs which takes a number and returns an 
// array containing that many numbers from the Fibonacci sequence. 
// Using an example input of 8, 
// this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// iteration fibonacci 
function fibsI(n) {
    let array = [];
    let a = 0;
    let b = 1;
    let c;
    for (let i = 1; i <= n; i++) {
        array.push(a);
        c = a + b;
        a = b;
        b = c;
    }
    return array;
}
console.log(fibsI(8));




// Now write another function fibsRec 
// which solves the same problem recursively.

// recursion fibonacci
function fibsR(n, array = []) {
    if (n <= 0) {
        return array;
    }
    if (array.length === 0 || array.length === 1) {
        array.push(array.length);
    } else {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }
    return fibsR(n - 1, array);
}
console.log(fibsR(8));