// Akses Saja --------------------------------------------------------------------------

const data = [
  ["i",["i","i","i",{ number: 123, string: ["i", { value: "Hello"}] }]], "i","i"
]

const [[_b, [_c, _d, _e, { string: [_f,{ value }] }] ],_a] = data
console.log(value);

// Reassign --------------------------------------------------------------------------

const data = [
  ["i",["i","i","i",{ number: 123, string: ["i", { value: "Hello"}] }]], "i","i"
]

let [[_b, [_c, _d, _e, { string: [_f,{ value }] }] ],_a] = data

value = "Hello Baru!"

console.log(value);
