function hitungPangkat(angka, pangkat) {
    let result = Math.pow(angka, pangkat);
    return result;
}
let bilanganPertama = 2;
let bilanganKedua = 3;
let hasilPangkat = hitungPangkat(bilanganPertama, bilanganKedua);
console.log(bilanganPertama + " pangkat " + bilanganKedua + " = " + hasilPangkat);
