function skalaRichter(nilai) {
    if (nilai >= 0.0 && nilai < 5.0) {
        return "Tidak ada kerusakan, jika ada hanya kerusakan kecil";
    } else if (nilai >= 5.0 && nilai < 5.5) {
        return "Beberapa bangunan akan rusak!";
    } else if (nilai >= 5.5 && nilai < 6.5) {
        return "Tembok retak atau roboh.";
    } else if (nilai >= 6.5 && nilai < 7.5) {
        return "Bahaya! Banyak bangunan dan gedung roboh.";
    } else if (nilai >= 7.5) {
        return "Sangat Bahaya! Banyak bangunan dan gedung hancur.";
    } else {
        return "Nilai tidak valid untuk Skala Richter";
    }
}

let nilai = 7.6;
let hasilDefinisi = skalaRichter(nilai);
console.log("Nilai Skala Richter " + nilai + ": " + hasilDefinisi);

let A = 5;
let B = 6;

console.log("Sebelum pertukaran:");
console.log("A =", A);
console.log("B =", B);

// Menukar nilai antara A dan B menggunakan variabel tambahan
let temp = A;
A = B;
B = temp;

console.log("Setelah pertukaran:");
console.log("A =", A);
console.log("B =", B);

