let jmlAngkot = 10;
let angkot = 1;
let angkotBeroperasi = 6;

for (angkot; angkot <= jmlAngkot; angkot++) {
    if (angkot <= 6 && angkot != 5) {
        console.log("Angkot No. " + angkot + " beroperasi dengan baik.");
    } else if (angkot == 8 || angkot == 10 || angkot == 5) {
        console.log("Angkot No. " + angkot + " sedang lembur ges.");
    } else {
        console.log("Angkot No. " + angkot + " tidak beroperasi (badmood).");
    }
}
