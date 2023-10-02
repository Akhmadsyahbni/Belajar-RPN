let uts = 42;

if (uts >= 90) {
    console.log(`kamu mendaptkan nilai uts A karena nilaimu ${uts}`);
} else if (uts >= 80 && uts <= 89) {
    console.log(`kamu mendaptkan nilai uts B karena nilaimu ${uts}`);
} else if (uts >= 70 && uts <= 69) {
    console.log(`kamu mendaptkan nilai uts C karena nilaimu ${uts}`);
} else if (uts >= 60 && uts <= 59) {
    console.log(`kamu mendaptkan nilai uts D karena nilaimu ${uts}`);
} else if (uts >= 40 && uts <= 49) {
    console.log(`kamu mendaptkan nilai uts D karena nilaimu ${uts}`);
} else {
    console.log("Anda bot rpn kali ya tidak ada nilai kriteria sama sekali");
}

console.log('');

console.log("Belaajar Nested If else");

let uas = "string";

console.log(`Nilai uas kamu adalah ${uas}`);

if (typeof (uas === "number")) {
    console.log(`nilai ${uas} bertipe number`);
    if (uas >= 90) {
        console.log(`Selmat anda lulusan terbaik`);
    } else {
        console.log('anda bukan lulusan terbaik');
    }
} else if (typeof uas === "string") {
    console.log("uas bertipe string")
} else {
    console.log("tidak ada")
}