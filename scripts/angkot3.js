let jmlAngkot = 10;
let angkot = 1;
let angkotBeroperasi = 6;

for (angkot; angkot <= jmlAngkot; angkot++){
    if(angkot <= angkotBeroperasi){
        console.log("Angkot No. " + angkot + " beroperasi dengan baik.");
    } else {
        console.log("Angkot No. " + angkot + " sedang tidak beroperasi.");
    }
}