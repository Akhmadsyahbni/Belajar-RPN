/* Method isArray() digunakan untuk mengecek apakah isi dari suatu variabel berupa array atau
tidak. Jika berupa array, hasil method ini adalah boolean true. Jika bukan array, hasilnya boolean
false contohnya sebgai berikuy*/

let a = new Array ("a","b","c",true,false,);
let b = ["selamat","siang","indonesia"];
let c = 123456;
let d = true;

console.log(Array.isArray(a));
console.log(Array.isArray(b));
console.log(Array.isArray(c));

// Terlihat variabel a dan b menghasilkan true, berarti 2 variabel itu mempunyai nilai array
// dan false berarti bukan nilai array

