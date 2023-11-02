/* Ketika kita melakukan perbandingan antara dua nilai, JavaScript akan mengevaluasi kedua nilai tersebut dan mengembalikan boolean dengan nilai hasil perbandingan tersebut, 
baik false atau true contohnya seperti ini 
> (lebih dari)
< (kurang dari)
== (samadengan)
=== (samadengan identik dengan tipe datanya)
==! (tidak samadengan)
>= (lebih besar samadengan)
<= (kurang dari samadengan)
*/

let a = 10;
let b = 20;

console.log(a > b);
console.log(a < b);

console.log('');

let hello = "12345";
let angka = 12345;

console.log(hello == angka); //true karena data nya sama-sama 1-5
console.log(hello === angka); //false karena tipe datanya berbeda
