// cara membuat variabel
var a = "a";
var b = "b";
const c = "c";

// variabel bisa menampung tipe data string (text), integer/number, boolean, array, object

let nama = "bryan"; //string
let umur = 22; //number
let apakahBenar = true; //boolean
let uang = 5000.5; //number namun ada koma

// operator aritmatika
let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, `pertambahan`);
console.log(angka1 - angka2, `pengurangan`);
console.log(angka1 * angka2, `perkalian`);
console.log(angka1 / angka2, `pembagian`);
console.log(angka1 % angka2, `modulus`);

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); // 30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); // -10

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); // 200

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); //0.5

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika); //10

// string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstName = "agus";
let lastName = "setiawan";
let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(firstName + " " + lastName);
console.log(firstName - lastName); //NaN

// alur pembacaan code
// untuk membaca code kalian harus membacanya dari ke kanan, dan atas ke bawah
// contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20
number = false;
console.log(number + 10); //10

// pertanyaan? kenapa false + 10 tetap menjadi 10?? karena false = 0, true = 1
console.log(true + 10); //11

// membaca error
// jangan takut jika terjadi error, justru kalian harus takut kalau tidak adak error dalam pemrograman
// karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak error, itu bikin si programmer muak mencari error atau letak kesalahannya

// contoh error
// Constant tidak bisa diubah nilainya
// const hewan = "jerapah";
// console.log(hewan);
// hewan = "buaya";
