let s = "";

// for (let i = 0; i < 20; i++) {
//     for (let j = 0; j <= i; j++) {
//         s += "*";
//     }
//     s += "\n";
// }

// for (let i = 10; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//         s += "*";
//     }
//     s += "\n";
// }

for (let i = 10; i > 0; i--) {
    for (let k = 0; k < 10 - i; k++) {
        s += " ";
    }
    for (let j = 0; j < i; j++) {
        s += "*";
    }
    s += "\n";
}
console.log(s);
