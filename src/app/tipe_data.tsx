let firstName: string = "Budi";
let lastName: string = "Santoso";
const isAktif: boolean = true;

console.log(`Akun atas nama ${firstName} ${lastName} status aktif: ${isAktif}`);

let rawUsername: string = " admin_smkn10 ";
let cleanUsername: string = rawUsername.trim();
let panjangUsername: number = cleanUsername.length;

console.log(cleanUsername);
console.log(panjangUsername);

let komentar: string = "Wah, aplikasi ini sangat lambat dan buruk!";
let posisiBuruk: number = komentar.indexOf("buruk");
let potonganKalimat: string = komentar.substring(0, 19);

console.log(posisiBuruk);
console.log(potonganKalimat);

const string1: string = "diskon";
const string2: string = "spesial50";
const gabunganKupon: string = string1.concat(string2);
const kodeKupon: string = gabunganKupon.toUpperCase();

console.log(kodeKupon);

let hargaStr: string = "150000.50";
let harga: number = parseFloat(hargaStr);

let jumlahStokStr: string = "25";
let jumlahStok: number = parseInt(jumlahStokStr);

let totalHarga: number = harga * jumlahStok;
console.log(totalHarga);

let totalBelanja: number = 250000;
totalBelanja -= 50000;
totalBelanja += totalBelanja * 0.1;

console.log(totalBelanja);

let inputUsia: string = "17";
let syaratUsia: number = 17;

console.log((inputUsia as unknown) === syaratUsia);
console.log(Number(inputUsia) >= syaratUsia);

let isPasswordCorrect: boolean = true;
let isEmailVerified: boolean = true;

let bisaMasukDashboard: boolean = isPasswordCorrect && isEmailVerified;
console.log(bisaMasukDashboard);

isEmailVerified = false;
bisaMasukDashboard = isPasswordCorrect && isEmailVerified;
console.log(bisaMasukDashboard);

let isNilaiTinggi: boolean = true;
let isJuaraLomba: boolean = false;

let layakBeasiswa: boolean = isNilaiTinggi || isJuaraLomba;
console.log(layakBeasiswa);

let member: boolean = true;

if (member === true) {
  let diskon: number = 0.2;
  console.log(diskon);
}

if (member === true) {
  var diskonLama: number = 0.2;
  console.log(diskonLama);
}
