/*
    Write a function called 'transformGeekData' that transforms some set of data from one format to another.
*/

var arr = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function transformEmployeeData(arr) {

    const res = [];

    arr.forEach(arr_item => {

        const res_obj = {};

        arr_item.forEach(item => {
            let key = item[0];
            let val = item[1];
            res_obj[key] = val;
        });

        res.push(res_obj);

    });

    return res;
}

console.log(transformEmployeeData(arr));