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
let arr = ["Muh", "Devano", "Alfarizy", "Anton", "Pandu"];
//1. Join
// console.log(arr.join(", ")); // Menggabungkan isi array menjadi string dengan pemisah " - "

// 2. Pop and Push
// arr.push("Budi", "Joko"); // Menambahkan elemen di akhir array
// arr.pop(); // Menghapus elemen terakhir dari array
// console.log(arr.join(", "));

// 3. Shift and Unshift
// arr.unshift("Budi", "Joko"); // Menambahkan elemen di awal array
// arr.shift(); // Menghapus elemen pertama dari array
console.log(arr.join(", "));
