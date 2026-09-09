for (let i: number = 0; i < 10; i++) {
  console.log(i);
}

for (let i: number = 0; i <= 9; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (let i: number = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let array1: number[] = [1, 2, 3, 4, 5, 6];
console.log(array1[5]);

let array2: number[] = [5, 2, 4, 1, 3, 5];
array2.sort();
console.log(array2);

let array3: string[] = [
  "selamat",
  "kalian",
  "melakukan",
  "perulangan",
  "array",
  "dengan",
  "for",
];
for (let i: number = 0; i < array3.length; i++) {
  console.log(array3[i]);
}

let array4: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i: number = 0; i < array4.length; i++) {
  if (array4[i] % 2 === 0) {
    console.log(array4[i]);
  }
}

let kalimat: string[] = ["saya", "sangat", "senang", "belajar", "javascript"];
console.log(kalimat.join(" "));

let sayuran: string[] = [];
sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

console.log(sayuran);
