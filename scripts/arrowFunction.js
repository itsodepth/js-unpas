// function expression with arrow function (untuk mempersingkat)

// let sebutNama = function (nama) {
//     alert(`Halo ${nama}`);
// };
// sebutNama("Devano");

//contoh arrow function
// const sebutNama = (nama) => {
//     return `Halo, ${nama}`;
// };
// console.log(sebutNama("Devano"));

// implisit return (jika hanya ada 1 parameter, kurung bisa dihilangkan)
// const sebutNama = (nama) => `Halo, ${nama}`;
// console.log(sebutNama("Devano"));

// kasus jika tanpa parameter
// const sebutNama = () => `Halo, Devano`;
// console.log(sebutNama());

// kasus jika sedikit lebih kompleks
let mahasiswa = ["Devano", "Kaela", "Alfie", "Bima", "Dina"];

// cara 1
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// cara 2 (arrow function)
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// kasus lain jika ingin return bentuk objek
let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jmlHuruf: nama.length })); // jika ingin buat objek, jangan lupa kurung kurawal dibungkus kurung biasa
console.table(jumlahHuruf);
