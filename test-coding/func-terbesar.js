function bilanganTerbesar(a, b, c) {

    if (a > b && a > c) {
       return a
    }else if (b > a && b > c) {
        return b
    }else if(c > a && a > b ){
        return c;
    }else{
        return false
    }
}

const result = bilanganTerbesar(1, 10, 7);
console.log("Bilangan terbesar adalah:", result);
