
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
  