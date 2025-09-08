const btn2 = document.querySelector(".btn2");
const body = document.body;
let daftarNama = [];

function munculNama() {
    if (daftarNama.length < 100) {
        const nama = document.createElement("h1");
        nama.textContent = "Kaela Kovalskia";
        nama.style.transition = "color 1s";
        body.append(nama);
        daftarNama.push(nama);
    }
}

function ubahWarnaTeks() {
    if (daftarNama.length > 0) {
        daftarNama.forEach((warna) => {
            warna.style.color = "blue";
        });
    }
}
