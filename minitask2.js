const minitask2 = (r) => {

  if (r % 7 == 0) {
    console.log("Luas: " + 22/7 * r * r );
    console.log("Keliling: " + 2 * 22/7 * r );
    return
  } 
    console.log("Luas: " + 3.14 * r * r );
    console.log("Keliling: " + 2 * 3.14 * r );
}

minitask2(7)