const suhu = (num, str, cb) => {
  return cb(num, str)
}

const result = (c, t) => {
  switch (t) {
    case "f":
      return `Hasilnya: ${(9/5) * c}`
      break;
    case "r":
      return `Hasilnya: ${(4/5) * c}`
      break;
    case "k":
      return `Hasilnya: ${c + 273,15}`
    }
  }


console.log(suhu(5,"f", result));
console.log(suhu(5,"k", result));
console.log(suhu(5,"r", result));

console.log(suhu(5,"f", function(x, y){
  return `Hasilnya: ${(9/5) * x}`
}));
console.log(suhu(5,"r", function(x, y){
  return `Hasilnya: ${(4/5) * x}`
}));
console.log(suhu(5,"k", function(x, y){
  return `Hasilnya: ${x + 273,15}`
}));
