// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang; // buat nambah penumpang aja
    };
    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            alert("Gada penumpang sir"); // pengelolaan ketika penumpang kosong
            return false;
        }
        for (let i = 0; 0 < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined; // pengelolaan penumpang + udah bayar
                this.kas += bayar;
                return this.penumpang;
            }
        }
    };
}

let angkot1 = new Angkot("Devano", ["Surakarta", "Kartasura"], [], 0);
let angkot2 = new Angkot("Kaela", ["Jogja", "Sukoharjo"], [], 0);
