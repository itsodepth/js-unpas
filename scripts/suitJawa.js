let tanya = true;
while (tanya) {
    // menangkap pilihan player
    let p = prompt("Pilih : gajah, semut, orang");

    //menangkap pilihan computer
    //memilih angka random buat si computer
    let com = Math.random();
    if (com < 0.34) {
        com = "gajah";
    } else if (com >= 0.34 && com < 0.67) {
        com = "semut";
    } else {
        com = "orang";
    }

    //rules buat game ini
    let hasil = "";
    if (p == com) {
        hasil = "SERI!";
    } else if (p == "gajah") {
        // if (com == "orang"){
        //     hasil = "MENANG!";
        // } else {
        //     hasil = "KALAH!";
        // }
        hasil = com == "orang" ? "MENANG!" : "KALAH!";
    } else if (p == "semut") {
        hasil = com == "gajah" ? "MENANG!" : "KALAH!";
    } else if (p == "orang") {
        hasil = com == "semut" ? "MENANG!" : "KALAH!";
    } else {
        hasil = "LU MASUKIN APA KOCAK🔥";
    }

    //tampilkan hasilnya
    alert("Kamu memilih : " + p + "\nKomputer memilih : " + com + "\nHasilnya : " + hasil);

    tanya = confirm("You wanna play again?");
}

alert("Thank you for the game, my lord!");
