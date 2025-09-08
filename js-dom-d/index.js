document.title = "Kaela Kovalskia";
// const body = document.body;

// body.append("Hello World!"); // untuk mengisikan sesuatu pada suatu element

// const judul = document.createElement("h3"); // <h1></h1>
// judul.textContent = "<marquee>kaela kovalskia</marquee>"; // <h1>kaela kovalskia</h1>

// const namaSaya = document.createElement("h3");
// namaSaya.innerHTML = "<marquee>Devano</marquee>"; // <h2><em>Devano</em></h2>

// const namaYou = document.createElement("h3");
// namaYou.innerText = "<marquee>KOBO KANAERU</marquee>"; // <h3>&lt;em&gt;Devano&lt;/em&gt;</h3>

// body.append(judul);
// body.append(namaSaya);
// body.append(namaYou);

const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");
const body = document.body;
let nama = [];

const defaultText = "KLIK ME! 1";
btn1.textContent = defaultText;

btn1.style.border = "none";
btn1.style.padding = "10px 20px";
btn1.style.backgroundColor = "lightblue";
btn1.style.borderRadius = "10px";
btn1.style.cursor = "pointer";
btn1.style.marginRight = "10px";
btn1.style.fontSize = "16px";

function gantiWarna() {
    btn1.style.background = "aqua";
    const newText = document.createElement("p");
    newText.textContent = "Warna sudah diubah";
    body.append(newText);
}

function ubahTeks() {
    btn1.textContent = "Aku Berubah";
}

function balikTeks() {
    btn1.textContent = defaultText;
}

function munculNama() {
    if (nama.length === 0) {
        for (nama = 0; nama <= 100; nama++) {
            nama = document.createElement("h1");
            nama.textContent = "Kaela Kovalskia";
            body.append(nama);
            nama.push(h1);
        }
    }
}

function ubahWarnaTeks() {
    if (nama.length > 0) {
        nama.forEach((warna) => {
            warna.style.color = "blue";
        });
    }
}
