// 1. Basic mengisi array
// var arr = ["a", 1, true];
// console.log(arr);

// 2. Mengisi array dengan indeks nya
// var arr = [];
// arr[0] = "a";
// arr[1] = 1;
// arr[2] = true;
// arr[3] = "BWAHAHAHA";
// console.log(arr);

// 3. Menghapus isi array
// var arr = ["Muh", "Devano", "Alfarizy"];
// arr[0] = undefined; // Menghapus isi array dengan mengisi undefined
// console.log(arr);

// 4. Menampilkan isi array tidak menggunakan objek (menggunakan method length dan loop)
// let arr = ["Muh", "Devano", "Alfarizy", "Anton", "Pandu"];
// for (let i = 0; i < arr.length; i++) {
//     console.log("Mahasiswa ke-" + (i + 1) + " : " + arr[i]);
// }

// Method pada array
// let arr = ["Muh", "Devano", "Alfarizy", "Anton", "Pandu"];
//1. Join
// console.log(arr.join(", ")); // Menggabungkan isi array menjadi string dengan pemisah " - "

// 2. Pop and Push
// arr.push("Budi", "Joko"); // Menambahkan elemen di akhir array
// arr.pop(); // Menghapus elemen terakhir dari array
// console.log(arr.join(", "));

// 3. Shift and Unshift
// arr.unshift("Budi", "Joko"); // Menambahkan elemen di awal array
// arr.shift(); // Menghapus elemen pertama dari array

// 4. Splice
// rumus : namaVariabel.splice(indeksAwal, jumlahElemenYangDihapus, elemenBaru1, elemenBaru2, ...);
// arr.splice(2, 0, "devano", "benimaru"); // splice menambahkan elemen baru pada indeks tertentu
// arr.splice(2, 3, "Venzos"); // Menghapus elemen pada indeks tertentu
// console.log(arr.join(", "));

// 5. Slice
// let arr2 = arr.slice(1, 3); // Mengambil elemen dari indeks
// let arr2 = arr.slice(1, 3);
// console.log(arr2.join(", ")); // Mengambil elemen dari indeks

// 6. foreach
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// let nama = ["Devano", "Nami", "Hancock", "Vivi"];
// nama.forEach(function (a, b) {
//     console.log("Nama mahasiswa ke-" + (b + 1) + " adalah : " + a);
// });

// 7. Map
// let angka = [1, 3, 5, 7, 9, 2, 4, 6];
// let angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join(", "));

// 8. Sort
// let angka = [1, 3, 5, 7, 8, 9, 2, 4, 6, 20, 90, 10];
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join(", "));

// 9. Filter & find
let angka = [1, 3, 5, 7, 8, 9, 2, 4, 6, 20, 90, 10];
let angka2 = angka.filter(function (a) {
    return a > 5;
});
let angka3 = angka.find(function (a) {
    return a > 5;
});
console.log(angka2.join(", "));
console.log(angka3);
