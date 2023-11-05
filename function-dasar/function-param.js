/* Pada materi sebelumnya, kita telah berkenalan dengan fungsi yang merupakan suatu blok kode yang 
dapat menerima input dan menghasilkan output tertentu. 
Input ke dalam sebuah fungsi dikirimkan melalui parameter.
Di dalam fungsi kita akan banyak bertemu istilah parameter & argument. 
Penggunaan istilah ini sering kali tertukar, bahkan di kalangan developer. */

// Parameter merupakan variabel yang didefinisikan sebagai input dari sebuah fungsi. Contoh:

function multiplay(a,b){ // a dan b adalah parameter

}
multiplay (3,5); // Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:

// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring
// object untuk mendapatkan nilainya. Contohnya

const user = {
    id : 24,
    displayName : "Baban",
    fullName : "Akhmad Syahbani"
};

function introduce ({displayName,fullName}){
    console.log(`${displayName},${fullName}`)
}

introduce(user);