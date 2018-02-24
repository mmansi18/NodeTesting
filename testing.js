var test = require ('./index221')

test.assert(6, add(2,4), "2 + 4 === 6")

test.assert(36, mult(6,6), "6 * 6 === 36")

test.assert(36, add(6,6), "6 + 6 === 36")

test. assert(10, divide(100,10), "100 / 10 === 10")

function add (a, b){
    return a + b
}

function mult (a, b){
    return a * b
}

function divide (a, b){
    return a / b
}