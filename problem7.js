var expected = { foo: 5, bar: 6 };
var actual = { foo: 6, bar: 6 }

function assertObjectsEqual(actual, expected, testName) {

    let res = 'PASSED';

    for (const key in expected) {
        if (expected[key] !== actual[key]) {
            res = 'FAILED';
        }
    }

    return res;

}

console.log(assertObjectsEqual(actual, expected, 'Check if the objects are equal.'));