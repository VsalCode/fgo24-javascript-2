/*--------------------------------------------------------------------------------- 
CASE 1 :
Menambah array "string" dengan berisikan "key" object yang sama seperti index ke-1, hanya beda value
---------------------------------------------------------------------------------*/

// cara destructuring dengan spread biasa : 

const data = [
  ["i",["i","i","i",{ number: 123, string: ["i", { value: "Hello"}] }]], "i","i"
]

let { string } = data[0][1][3]

string = [...string, { value: "Halo Baru !"}]

console.log(string);


// Nested Destructuring + spread :

const data2 = [
  ["i",["i","i","i",{ number: 123, string2: ["i", { value: "Hello"}] }]], "i","i"
]

let [[_b, [_c, _d, _e, { string2 }] ],_a] = data2

string2 = [...string2, { value: "Hello Baru" } ]

console.log(string2);


/*---------------------------------------------------------------------------------
CASE 2 :
1. Menambah value "Hiking" di key "skills"
2. Menambah object baru dengan value yang sama dengan object di index ke-0 di key education yang bertipe array 
---------------------------------------------------------------------------------*/

const bio = {
  name: "John O'Connor",
  age: 30
}

const extraInfo = {
  skills: ["web programming", "painting"],
  education: [
    {
      name: "SMA 1 Denapasar",
      year: 2022
    }
  ]
}

let { skills, education } = extraInfo

skills = [...skills, "hiking"]

education = [ ...education ,{name: "SMA 2 DEPOK", year: 2025} ]

const profile = {
  ...bio,
  ...extraInfo,
  skills,
  education
}

console.log(profile);

