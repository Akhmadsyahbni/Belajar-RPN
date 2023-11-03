/* Sebuah tipe data yang sangat berguna dalam pengembangan aplikasi dengan JavaScript.
Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.
*/

// Untuk menetapkan sebuah objek pada sebuah variabel kita gunakan tanda kurung kurawal
// const user = {};

/* Object berisi pasangan key dan value yang juga dikenal dengan property. Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai. 
Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain. 
Key dan value di dalam object dituliskan seperti berikut: */

let object = {key1:"Value1",key2:"Value2",key3:"Value3"}
/*Key harus berupa string dan dituliskan sebelum titik dua (:), lalu diikuti dengan value-nya. 
Meskipun key merupakan string, 
kita tidak perlu menuliskan tanda petik kecuali ada karakter khusus seperti spasi.*/

const character = {
    name: "Babandot",
    age : 23,
    species : "Human",
    "Hair color" : "Blond"
}

const user = {
    firstName : "Akhmad",
    lastName : "Syahbani",
    age : 23,
    isMerried : false
}
// Kemudian untuk mengakses nilai dari properti object, 
// kita dapat memanggil nama object lalu tanda titik dan diikuti nama propertinya. Contoh:
// yang di sini hanya mengakses key dan value nya saja.
console.log(`Hello nama saya adalah ${user.firstName} ${user.lastName}`);
console.log(`Umur saya sekarang ${user.age} tahun dan belum menikah ${user.isMerried}`);

console.log('');
const spaceship = {
    name : "Milenium Falcon",
    manuFacture : "Corellian Engineering Corporation",
    maxSpeed : 1200,
    color : "Light gray"
}

spaceship.color = "Glossy Red";
spaceship.maxSpeed = 1300;
delete spaceship.manuFacture; // delete object panggil dulu variabel nya lalu panggil key nya 
console.log(spaceship); // ini mengakses semua bentuk utuh object


// const rumus = 20;
// rumus = 21;

