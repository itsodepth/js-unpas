function tampilAngka(n) {
    if (n === 0) return; // Base case to stop recursion
    console.log(n);
    tampilAngka(n - 1);
}

function factorial(n) {
    if (n === 0) return 1; // Base case for factorial
    return n * factorial(n - 1); // Recursive case
}

document.writeln("Hasil faktorial : " + factorial(5));
console.log("Hasilnya adalah " + factorial(5));
