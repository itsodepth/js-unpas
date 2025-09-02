// function declaration (upgraded with Object.create())
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat mam! Energi kamu bertambah sebanyak ${porsi}`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain! Energi kamu berkurang sebanyak ${jam}`);
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur! Energi kamu bertambah sebanyak ${jam * 2}`);
    },
};

function Mahasiswa(nama, energi) {
    let Mahasiswa = Object.create(methodMahasiswa); // membuat object baru yang prototype-nya mengarah ke methodMahasiswa
    Mahasiswa.nama = nama;
    Mahasiswa.energi = energi;
    return Mahasiswa;
}

let Devano = Mahasiswa("Devano", 10);
let Kaela = Mahasiswa("Kaela", 20);

// constructor function
// function GameObject(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat mam! Energi kamu bertambah sebanyak ${porsi}`);
//     };
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain! Energi kamu berkurang sebanyak ${jam}`);
//     };
// }

// let game1 = new GameObject("Devano", 10);
// let game2 = new GameObject("Kaela", 20);
