/* Method push() dan pop() digunakan untuk menambah dan mengurangi element array dari
posisi terakhir. Dimana method push() untuk menambah element baru, sedangkan method
pop() untuk mengeluarkan (dan menghapus) 1 element.
Berikut contoh penggunaan method push(): */

let namaSembako = ["Beras","Telor","Gula"];
namaSembako.push("Kopi"); // method push() untuk menambah element baru paling kanan,
namaSembako.push("Minyak","Mie");
console.log(namaSembako);

console.log('');

let namaHewan = ["Macan","Singa","Buaya","Ular"];
namaHewan.pop(); // method push() untuk mengahpus element baru paling kanan,
console.log(namaHewan);
