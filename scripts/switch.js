let produk = prompt("Masukkan pilihan produk : \n1. Steam Points\n2. Steam Wallet\n3. HBO Pro\n4. Netflix Pro\n5. BStation Pro");

// switch (produk) {
//     case "1":
//         alert("Kamu milih steam points");
//         break;
//     case "2":
//         alert("Kamu milih steam wallet");
//         break;
//     case "3":
//         alert("Kamu milih hbo pro");
//         break;
//     case "4":
//         alert("Kamu milih netflix pro");
//         break;
//     case "5":
//         alert("Kamu milih bstation pro");
//         break;
//     default:
//         alert("Produk ga ada di pilihan!");
//         break;
// }

switch (produk) {
    case "1":
    case "2":
        alert("Kamu milih produk steam!");
        break;
    case "3":
    case "4":
    case "5":
        alert("Kamu milih produk streaming!");
        break;
    default:
        alert("Produk ga ada di pilihan!");
        break;
}
