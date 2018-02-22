console.log(6 === 4 +2)

//add
function add(x, y) {
    return x + y 
}
console.log(6 === add(2, 4))

//subtract
function subtract(x, y) {
    return x - y
}
console.log(6 === subtract(12, 6))

//multiply
function mult(x, y) {
    return x * y
}
console.log(20 === mult(5, 4))

//exponet
function pow(x, y) {
    return x ** y
}
console.log(8 === pow(2, 3))

//divide
function div(x, y) {
    return x / y
}
console.log(10 === div(100, 10))

//higher order functions ~~~ (figure it out)
var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);




function assert (expected, actual, message) {
    if (expected === actual) {
        return message
    } else {
        return "***this failed"
        
    }
}
console.log(assert (6, add(4, 2), "good job"))

console.log(assert (6, add(5, 2), "good job"))

console.log(assert (8, pow(2, 3), "good job"))