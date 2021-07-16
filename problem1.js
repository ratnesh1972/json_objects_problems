//Write a function called “printAllValues” which returns an newArray of all the input object’s values.
var object = { name: 'RajiniKanth', age: 33, hasPets: false };

function returnArray(obj) {
    let values = [];
    for (const key in obj) {
        values.push(obj[key]);
    }
    return values;
}

console.log(returnArray(object));
