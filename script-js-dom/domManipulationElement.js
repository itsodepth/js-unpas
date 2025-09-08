// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>devano</em>"; //element.innerHTML -> mengubah isi teks html tanpa menyentuh htmlnya

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello World"; // mengubah isi teks html pada section a

// const judul = document.querySelector("#judul");
// judul.style.backgroundColor = "lightblue"; // mengubah warna background pada judul

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "judul"); // element.setAttribute() -> menambah attribute pada element

const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label"); // mengubah class p2 menjadi label. ini menimpa teks

// solusinya agar tidak menimpa, pake classList
p2.classList.add("label"); // menambah class label pada class p2
