let jmlAngkot = 10;
let angkot = 1;
let angkotBeroperasi = 6;

while (angkot <= angkotBeroperasi) {
    console.log("Angkot No. " + angkot + " beroperasi dengan baik.");
    angkot++;
}

for (angkot = angkotBeroperasi + 1; angkot <= jmlAngkot; angkot++) {
    console.log("Angkot No. " + angkot + " tidak beroperasi.");
}
