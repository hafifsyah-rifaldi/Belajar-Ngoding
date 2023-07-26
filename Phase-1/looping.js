// while ()
// for ()

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }
// console.log(" ");
// let a = 10;
// while (a >= 0) {
//     console.log(a);
//     a--;
// }
// dalam looping ada yang namanya arah, kiri atau kanan, kiri itu pengurangan, kanan itu pertambahan
// hati-hati infinite loop, atau loopnya tidak jalan

// for (let i = 1; i >= 0; i--) {
//     console.log(i);
// }

// let name = "Budi";

// Ada yang namanya method length untuk tipe data string dan array
// method length itu mengembalikan nilai angka, total huruf yang ada pada string atau total element yang ada pada array

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

// Tipe data string atau array di javascript, ada yang namanya indexing
// Index berawal dari 0
// console.log(name[0] + name[4]);

// diberikan kasus untuk membalikan suatu kata, tanpa menggunakan method reverse

// let name = "agus"; // length 4, sedangkan index itu dari 0, a -> 0, g->1, u->2, s->3
// let result = "";

// for (let i = name.length - 1; i >= 0; i--) {
// visualisasi nya adalah i = 4-1; 4-1 >=0; i--
// result += name[i]; // s=> su => sug => suga
// ada perintah lagi,
// }
// console.log(result);

// Nested loop
let result = "";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log(j);
    }
    console.log("");
}
console.log("selesai");

// kesimpulan looping sering bertemu dengan method length
// looping itu agar membuat code jadi lebih pendek dan proses menjadi dinamis
