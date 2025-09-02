// function declaration (upgraded with Object.create())
// object tanpa class
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat mam! Energi kamu bertambah sebanyak ${porsi}`);
// };

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain! Energi kamu berkurang sebanyak ${jam}`);
// };

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur! Energi kamu bertambah sebanyak ${jam * 2}`);
// };

// let Devano = new Mahasiswa("Devano", 10);
// let Kaela = new Mahasiswa("Kaela", 20);

// versi menggunakan class (ini membungkus aja pake class, biar rapi. Sebenarnya sama aja kaya di atas yang pake prototype)
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat mam! Energi kamu bertambah sebanyak ${porsi}`);
    };

    main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain! Energi kamu berkurang sebanyak ${jam}`);
    };

    tidur = function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur! Energi kamu bertambah sebanyak ${jam * 2}`);
    };
}

let devano = new Mahasiswa("Devano", 10);
let kaela = new Mahasiswa("Kaela", 20);
