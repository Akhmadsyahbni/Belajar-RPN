/* operator  Operator dalam bahasa pemrograman sendiri adalah simbol yang memberi tahu interpreter untuk melakukan operasi seperti matematika, relasional, atau logika untuk memberikan hasil tertentu.*/

// Asigment Operator 
/*Pada dasarnya operator ini adalah tanda sama dengan (=), di mana tanda ini digunakan untuk menginisialisasi nilai pada variabel. Tempatkan variabel yang ingin diberi nilai di sebelah kiri, sementara nilainya di sebelah kanan. 
Di antara keduanya terdapat operator assignment.*/

let x = 10;
let y = 20;

// let jumlah = x + y;
x += y;

console.log(x);

console.log('');

// Comparasion operator 

/* ==	Membandingkan kedua nilai apakah sama (tidak identik).
   !=	Membandingkan kedua nilai apakah tidak sama (tidak identik).
   ===	Membandingkan kedua nilai apakah identik
   !==	Membandingkan kedua nilai apakah tidak identik.
   >	Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
   <	Membandingkan dua nilai apakah nilai kedua lebih dari nilai pertama.
   >=	Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
   <=	Membandingkan dua nilai apakah nilai kedua lebih atau sama dengan nilai pertama.
*/

// perbandingan antara "Sama" dan "identik"
/* Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” adalah membedakan antara “sama” (==) dan “identik” (===).

Kita sudah mengetahui bahwa setiap nilai pasti memiliki tipe data baik itu number, string atau boolean. Contohnya sebuah string “10” dan number 10 merupakan hal yang serupa, 
tetapi keduanya tidak benar-benar sama.*/

let asString = '10';
let asNumber = 10;

console.log(asString == asNumber) // true karena nilai nya 10 tidak peduli tipe datanya apa
console.log(asString === asNumber); // false karena tipe datanya berbeda

// Logical operator 
console.log('')
console.log('')
/* && Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
contohnya */
let a = 10;
let b = 20;

console.log('and operator')
console.log(a < b && b > a); // true karena nilai keduanya terpenuhi
console.log(a > b && b > a); // false karena nilai salah satunya tidak tepenuhi
console.log('|| atau operator')
console.log(a < b || b < a); //true karena jika salah satunya saja terpenuhi maka true
console.log('! not')
console.log(!(b > a)); //sebenernya true. karena ada operator not maka jadi false

// Urutan Kekuatan operator, Operator perkalian dan pembagian lebih kuat daripada operator penambahan dan pengurangan
// Contohnya sebagai berikut
// Ya, perbedaan hasil antara kedua ekspresi itu disebabkan oleh urutan operasi yang berbeda. Dalam ekspresi matematika, urutan operasi dalam tanda kurung memiliki prioritas tertinggi. Jika tidak ada tanda kurung, 
// maka urutan operasi yang berlaku adalah seperti yang telah dijelaskan dalam aturan PEMDAS
let foo = (4 + 6) / (5 - 3) * 2 + 3;
let foo2 = 4 + 6 / 5 - 3 * 2 + 3;
console.log(foo);