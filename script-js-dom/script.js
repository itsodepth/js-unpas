// DOM Selection
// document.getElementById() -> mengembalikan element
const judul = document.getElementById("judul");
judul.style.color = "red"; // untuk mengubah warna teks
judul.style.backgroundColor = "black"; // untuk mengubah warna background
judul.innerHTML = "Devano Alfarizy"; // mengubah isi teks html tanpa menyentuh htmlnya

// document.getElementsByTagName() -> mengembalikan HTMLCollection
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightblue"; // mengubah warna background pada semua paragraf
}

const h1 = document.getElementsByTagName("h1")[0]; // memilih h1 pertama dari HTMLCollection
h1.style.fontSize = "50px"; // mengubah ukuran font pada h1

// document.getElementsByClassName() -> mengembalikan HTMLCollection
const p1 = document.getElementsByClassName("p1")[0]; // memilih class p1 pertama dari HTMLCollection
p1.innerHTML = "Ini diubah dari javascript"; // mengubah isi teks html tanpa menyentuh htmlnya
