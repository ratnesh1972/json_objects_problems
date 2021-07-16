//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.var object = { name: 'RajiniKanth', age: 33, hasPets: false };
var object = { name: 'RajiniKanth', age: 33, hasPets: false };

function printAllKeys(obj) {
    let keys = [];
    for (const key in obj) {
        keys.push(key);
    }
    return keys;
}

console.log(printAllKeys(object));