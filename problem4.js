/* Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
 1) the first element of the array as the object’s key, and
 2) the last element of the array as that key’s value. */

var arr = ['GUVI', 'I', 'am', 'a geek'];

function transformFirstAndLast(arr) {
    let key = arr[0];
    let val = arr[arr.length - 1];
    const res = {
        key: val
    }
    return res;
}

console.log(transformFirstAndLast(arr));