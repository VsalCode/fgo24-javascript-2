// CALLBACK

const calculate = (num1, num2, cb) => {
  return cb(num1, num2)
}

const multiply = (x1, x2) => {
  return x1 * x2
}

const divide = (y1, y2) => {
  return y1 / y2
}

const result1 = calculate(5,2, multiply)
const result2 = calculate(5,2, divide)

console.log(result1);
console.log(result2);



