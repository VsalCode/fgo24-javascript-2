const angka = (num, cb) => {
  return cb(num);
  
}

const ganjilGenap = (x) => {
  if(x % 2 == 0){
    return `${x} adalah angka genap`;
  } else {
    return `${x} adalah angka ganjil`;
  }
}

console.log(angka(5, ganjilGenap));


