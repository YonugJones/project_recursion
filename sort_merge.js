// Build a function mergeSort that takes in an array and 
// returns a sorted array, using a recursive merge sort methodology. 
// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], 
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    return merge(left,right);
}

function merge(l1, l2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < l1.length && j < l2.length) {
        if (l1[i] <= l2[j]) {
            result.push(l1[i]);
            i++;
        } else {
            result.push(l2[j]);
            j++;
        }
    }
    while (i < l1.length) {
        result.push(l1[i]);
        i++;
    }
    while (j < l2.length) {
        result.push(l2[j]);
        j++;
    }
    return result;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
