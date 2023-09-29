let firstname;
firstname = "Akhmad"; // mendeklarasikan variabel terlebih dahulu lalu di isinisialisasi
let lastName = "Syahbani"; // langsung di isinisialisasi menggunakan operatror assigment

console.log(firstname);
console.log(lastName);

//let fullName = lastName; //Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
let fullName = (lastName = "Babandot");
console.log(fullName); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.

/*const 
const merupakan kependekan dari constant. Artinya, kita akan mendeklarasikan sebuah variabel dengan const 
ketika ingin variabel bernilai konstan dan tidak bisa diubah setelah diinisialisasi nilainya.contohnya
sebagai berikut Jika menginisialisasi kembali nilai variabel yang menggunakan const, 
kita akan mendapati eror “TypeError: Assignment to constant variable.”*/
const x = 100;
console.log(x);

// x = 50;

// console.log(x);
