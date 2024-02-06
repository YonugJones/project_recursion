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


// recursion fibonacci
function fibsR(n, array = []) {
    // break statement
    if (n <= 0) {
        return array;
    }
    // recursive logic
    if (array.length === 0 || array.length === 1) {
        array.push(array.length);
    } else {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }
    return fibsR(n - 1, array);
}
console.log(fibsR(8));