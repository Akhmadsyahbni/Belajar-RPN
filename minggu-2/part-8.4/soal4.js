function pasanganTerbesar(num) {
    // Ubah angka menjadi string
    const numStr = num.toString();
    let pasanganTerbesar = Number(numStr.slice(0, 2)); // Inisialisasi dengan pasangan pertama
  
    for (let i = 1; i < numStr.length - 1; i++) {
      const pasangan = Number(numStr.slice(i, i + 2));
      if (pasangan > pasanganTerbesar) {
        pasanganTerbesar = pasangan;
      }
    }
  
    return pasanganTerbesar;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573));   // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233));   // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  