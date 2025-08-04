// window scope / global scope / variabel global
var a = 1;
function test() {
    // adanya name conflict
    var a = 2;
    console.log(a); // akan tampil 2, karena mengutamakan variabel lokal
    // ini dinamakan function scope
}

test();
console.log(a); // akan tampil 1, karena variabel global tidak terpengaruh oleh function scope

// ------------------------------------------------
// CATATAN YAAAAAA!!!!
// window scope / global scope / variabel global
var a;
function test() {
    // adanya name conflict
    a = 2; // misal gada var, ini nilai akan menimpa nilai variabel a di global variabel
    console.log(a); // akan tampil 2, karena mengutamakan variabel lokal
    // ini dinamakan function scope
}

test();
console.log(a); // akan tampil 2, karena variabel global nilainya sudah ditimpa oleh function scope
