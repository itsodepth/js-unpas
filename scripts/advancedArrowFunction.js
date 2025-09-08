// - arrow function tdk memakai konsep this dan variabelny akan di telusuri lgi di lokal parent trdkt
// - declaration function memakai konsep this tpi bila variabelny  yg dicri tdk ad dlm localnya maka lngsng di telesuri di window
// - expression function memakai konsep this tpi bila variabel yg dicri tdk dlm local maka, ditelusuri lgi ke lokal parent trdkt

// Object Constructor

// let Mahasiswa = function () {
//     this.nama = "Devano";
//     this.umur = 21;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun`);
//     };
// };

// let devano = new Mahasiswa();

// Arrow Function in Object Constructor

// let Siswa = function () {
//     this.nama = "Kaela";
//     this.umur = 21;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun`);
//     };
// };

// let kaela = new Siswa();

// contoh lain penggunaan arrow function
let Siswa = function () {
    this.nama = "Kaela";
    this.umur = 21;
    this.sayHello = function () {
        console.log(`Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun`);
    };

    setInterval(() => {
        console.log(this.umur++);
    }, 500);
};

let kaela = new Siswa();
