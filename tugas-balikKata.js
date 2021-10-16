function balikKata(kata) {
  var kata2 = "";
  for (var i = kata.length - 1; i >= 0; i--) {
    kata2 += kata[i];
  }

  return kata2
}

console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
