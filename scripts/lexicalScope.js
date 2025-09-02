// contoh penerapan lexical scope biar jago
// jadi ini tuh teknik closure
// ketika local variabel di function tidak ditemukan, maka akan terjadi lexical scope dan mencari local variabel dari parentnya

// function init() {
//     let nama = "Devano";
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();

// contoh function factories 1
// function init() {
//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama();
// }
// let panggilNama = init();
// panggilNama("Devano");

// contoh function factories 2
// function init() {
//     return function tampilNama(nama) {
//         console.log(nama);
//     };
// }
// let panggilNama = init();
// panggilNama("Devano");
// panggilNama("Kaela");

// contoh function factories 3
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     };
// }
// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("malam");

// selamatPagi("Devano");
// selamatSiang("Kaela");
// selamatMalam("Alfie");

// contoh function factories 4 (closure)
// let add = function () {
//     let counter = 0;
//     return function () {
//         return ++counter;
//     };
// };

// counter = 100; // ini tidak akan berpengaruh ke counter di dalam function add karena ada lexical scope
// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());

// contoh function factories 4 (closure) [menggunakan immediately invoke function. biar ga perlu deklarasi variabel lagi untuk menampung function add]
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    };
})();

counter = 100; // ini tidak akan berpengaruh ke counter di dalam function add karena ada lexical scope
console.log(add());
console.log(add());
console.log(add());
