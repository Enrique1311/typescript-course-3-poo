// * Crear una propiedad estática

// Propiedad nativa de JavaScript
console.log(Math.PI);

// Método de JavaScript
console.log(Math.max(1.2, 9, 6));

// Propiedad estática creada por nosotros
class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, item) => (max >= item ? max : item), 0);
  }
}

console.log('MyMath.PI: ' + MyMath.PI);
console.log('MyMath.max() ' + MyMath.max(1, 2, 3, 4, 5));
