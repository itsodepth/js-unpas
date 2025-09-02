// cara membuat object secara literal
// PROBLEM: tidak efektif untuk object yang banyak
let mhs = {
    nama: "Devano",
    umur: 21,
    ips: [2.3, 3.9, 4.0, 3.8],
    alamat: {
        jalan: "Jl.Monginsidi No. 123",
        kota: "Solo",
        provinsi: "Jawa Tengah",
    },
};

//function declaration
function buatObjectMhs(nama, nim, email, jurusan) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.nim = nim;
    mahasiswa.email = email;
    mahasiswa.jurusan = jurusan;
    return mahasiswa;
}

let mhs1 = buatObjectMhs("Kaela Kovalskia", "230103107", "kaela@gmail.com", "Teknik Informatika");

// cara onstructor
function Warga(nama, tanggalLahir, alamat) {
    this.nama = nama;
    this.tanggalLahir = tanggalLahir;
    this.alamat = alamat;
}

let warga = new Warga("Nofariza", "3 September 2025", "Solo");
