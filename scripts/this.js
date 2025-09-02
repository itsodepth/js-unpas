// this global
let a = 10;
console.log(this.a); // this atau window nama object yang sama

// cara 1 - function declaration
// function halo(){
//     console.log(this);
//     console.log('Halo');
// }
// this.halo();
// this ini mengembalikan object Global

// cara 2 - object literal
// let obj = {};
// obj.halo = function () {
//     console.log(this);
//     console.log("Halo");
// };
// obj.halo;
// this mengembalikan object yang bersangkutan

// cara 3 - constructor
// function Halo() {
//     console.log(this);
//     console.log("Halo");
// }
// let obj1 = new Halo();
// let obj2 = new Halo();
// this mengembalikan object yang baru dibuat
