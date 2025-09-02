// EXCECUTION PHASE, HOISTING, SCOPE

// console.log(aku);
// let aku = "Aku adalah aku";

// creation phase pada Global Context (ini urutannya yaa)
// nama var/let/const = undefined
// nama function = fn() (atau outputnya nama function itu sendiri)
// hoisting
// window = global object (ketika js dibuat, ini otomatis dibuat oleh js engine)
// this = window (ini mengacu ke global object, yaitu window)

// execution phase

// contoh lain nih
// let nama = "Devano";
// let umur = 21;

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(sayHello());

// ============================================
// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan exceution phase
// window
// arguments
// hoisting

// let nama = "Devano Alfarizy";
// let username = "itsodepth";
// function cetakURL() {
//     let instagramURL = "https://instagram.com/";
//     return instagramURL + username;
// }
// console.log(cetakURL("kaelakovalskia"));
