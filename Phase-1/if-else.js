// let nilai = 30;
// // console.log(nilai >= 50); //tergantung si nilainya, hasilnya antara true or false
// if (nilai >= 50) {
//     // true or false
//     console.log(`Lulus`);
// } else if (nilai >= 40) {
//     console.log(`Tidak Lulus`);
// } else {
//     console.log(`Tidak Lulus BANGET!!`);
// }

let nilai = 70;

if (nilai >= 80 && nilai <= 100) {
    nilai = "A";
} else if (nilai >= 70 && nilai < 80) {
    nilai = "B";
} else if (nilai >= 60 && nilai < 70) {
    nilai = "C";
} else if (nilai >= 50 && nilai < 40) {
    nilai = "D";
} else {
    nilai = "E";
}
console.log(nilai);

// && AND semua kondisi harus terpenuhi lalu dia akan menghasilkan nilai true
// || OR salah satu kondisi harus terpenuhi lalu dia akan menghasilkan  nilai true
// ! NOT
nilai = 50;
let banding = nilai >= 80 && nilai <= 100; //antara true or false
console.log(banding, "&&");
let banding2 = nilai >= 80 || nilai <= 100; //antara true or false
console.log(banding2, "||");

let banding3 = nilai != 50;
console.log(banding3, "!");

// apa bedanya == dengan ===
let x = 50; //tipe data number
let y = "50"; // tipe data string

let banding4 = x == y;
console.log(banding4, "4");
let banding5 = x === y;
console.log(banding5, "5");

// if else bersarang
let number = 6;
if (number > 5) {
    if (number % 2 === 0) {
        console.log("Lebih besar dari 5 dan genap");
    } else {
        console.log("Lebih besar dari 5 dan ganjil");
    }
} else {
    if (number % 2 === 0) {
        console.log("Lebih kecil atau sama dengan dari 5 dan genap");
    } else {
        console.log("Lebih kecil atau sama dengan dari 5 dan ganjil");
    }
}
