const data = [
  ["nol",["nol","satu","dua",{ number: 123, string: ["random", { value: "Hello"}] }]], "lorem","ipsum"
]

const [ [_, [_a,_b, _c, {string:[_, {value: newValue}] }  ] ] ] = data

newValue = "Hallo Baru"

console.log(newValue);
