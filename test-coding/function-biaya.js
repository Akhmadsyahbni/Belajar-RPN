function hitungBiayaAir(totalPemakaian) {
    let biaya = 0;
    
    if (totalPemakaian <= 10) {
        biaya = totalPemakaian * 1000;
    } else if (totalPemakaian <= 20) {
        biaya = 10 * 1000 + (totalPemakaian - 10) * 1500;
    } else if (totalPemakaian <= 35) {
        biaya = 10 * 1000 + 10 * 1500 + (totalPemakaian - 20) * 2000;
    } else {
        biaya = 10 * 1000 + 10 * 1500 + 15 * 2000 + (totalPemakaian - 35) * 3000;
    }
    
    return biaya;
}

let totalPemakaian = 10;
let totalBiaya = hitungBiayaAir(totalPemakaian);
console.log(`Biaya yang harus dibayar untuk ${totalPemakaian}m3 adalah Rp.${totalBiaya},-`);
