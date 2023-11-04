/* Iterasi object dan array adalah dua hal yang paling banyak digunakan dalam mengelola data di JavaScript.
 JSON (JavaScript Object Notation) merupakan format data paling populer yang digunakan dalam 
 transaksi data saat ini.*/

 const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18
}
 
let firstName = "Dimas";
let age = 20;
 
// menginisialisasi nilai baru melalui destructuring object
({ firstName, age } = profile);
 
console.log(firstName);
console.log(age);