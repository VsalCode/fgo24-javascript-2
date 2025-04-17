
let data = [
  ["nol",["nol","satu","dua",{ number: 123, string: ["random", { value: "Hello"}] }]], "lorem","ipsum"
]


data[0] = {
  ...data[0][1][3].string[1],
  value: "Hello Baru"
}

console.log(data[0]);


  const bio = {
    name: "John O'Connor",
    age: 30
  }

  const extraInfo = {
    skills: ["web programming", "painting"],
    education: [
      {
        name: "SMP 1 Denapasar",
        year: 2022
      }
    ]
  }

  const profile = {
    ...bio,
    skills: ["hiking"],
    ...extraInfo,
    education: [{ name: "SMAN 2 DEPOK", year: 2023 }],
  }

  console.log(profile);
  