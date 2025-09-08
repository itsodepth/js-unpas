//document.querySelector() -> mengembalikan element pertama yang sesuai dengan selector css
// const p4 = document.querySelector("#b p"); // memilih paragraf pertama di dalam section dengan id b
// p4.style.color = "green"; // mengubah warna teks pada paragraf tersebut
// p4.style.fontSize = "30px"; // mengubah ukuran font pada paragraf tersebut

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "lightgreen"; // mengubah warna background pada list item kedua di dalam section dengan id b

// document.querySelectorAll() -> mengembalikan NodeList
// const p = document.querySelectorAll("p"); // memilih semua paragraf di dalam dokumen
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = "lightblue"; // mengubah warna background pada semua paragraf
// }

// cara lain select element html
const sectionB = document.getElementById("b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "green"; // mengubah warna teks pada paragraf tersebut
