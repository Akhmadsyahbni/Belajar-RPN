/* Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks, yakni dengan logical operators. Dengan logical operator, 
kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika.
operatornya && || !*/
let a = 10;
let b = 12;

// AND && OPERATOR
console.log(a < b && b > a); // (true && true) -> true
console.log(a > b && b > a); // (False && true) -> false 
//jadi and itu harus nilai dua-duanya benar / terpenuhi 

console.log('');

// OR || OPERATOR
console.log(a > b || b < a); // false  
console.log(b < a || a < b); // true

//jadi or itu jika salah satunya benar saja maka akan benar semua

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false