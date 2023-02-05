function squareRootOfTwo(x) {
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    }
    if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    }
    return Math.sqrt(x);
  }
  
console.log(squareRootOfTwo(4)); // Output: 2
console.log(squareRootOfTwo(-4)); // Output: "Tidak bisa input bilangan negatif"
console.log(squareRootOfTwo(3)); // Output: "Tidak bisa input bilangan ganjil"
