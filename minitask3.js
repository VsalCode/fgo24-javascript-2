const Suhu = {
  fahrenheit: function(c){
    return (9/5) * c
  },
  reamur: function(c){
    return c + 273,15
  },
  kelvin: function(c){
    return (4/5) * c
     
  },
  convert: function(c){
    console.log(this.fahrenheit(c));
    console.log(this.reamur(c));
    console.log(this.kelvin(c));
  }
}

Suhu.convert(5)

