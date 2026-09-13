import { ScrollView, StyleSheet, Text } from "react-native";

function tampilkan(): void {
  console.log("halo!");
}
tampilkan();

function munculkanAngkaDua(): number {
  return 2;
}
const tampung1: number = munculkanAngkaDua();

function kalikanDua(angka: number): number {
  return angka * 2;
}
const tampung2: number = kalikanDua(2);

function tampilkanAngka(angkaPertama: number, angkaKedua: number): number {
  return angkaPertama + angkaKedua;
}
const hasilTampilkanAngka: number = tampilkanAngka(5, 3);

function tampilkanAngkaDefault(angka: number = 1): number {
  return angka;
}
const hasilDefault1: number = tampilkanAngkaDefault(5);
const hasilDefault2: number = tampilkanAngkaDefault();

function tampilAngka(angkaPertama: number, angkaKedua: number): string {
  const hasil: number = angkaPertama + angkaKedua;
  if (hasil > 10) {
    return "hasil lebih besar dari 10";
  } else if (hasil > 0 && hasil < 10) {
    return "hasil lebih kecil dari 10";
  } else if (hasil === 0) {
    return "hasil 0";
  } else {
    return "Tidak ada nilai dari parameter";
  }
}
const hasilTampilAngka: string = tampilAngka(5, 10);

const hasilLooping: number[] = [];
function looping(iteration: number): void {
  for (let i: number = 0; i < iteration; i++) {
    hasilLooping.push(i);
  }
}
looping(2);

const fungsiPerkalian = function (
  angkaPertama: number,
  angkaKedua: number,
): number {
  return angkaPertama * angkaKedua;
};
const hasilPerkalian: number = fungsiPerkalian(2, 4);

function multiply(a: number, b: number = 1): number {
  return a * b;
}
const hasilMultiply1: number = multiply(5, 2);
const hasilMultiply2: number = multiply(5);

interface RestItem {
  text?: string;
}

const filter = (...rest: (number | RestItem | string)[]) => {
  return rest.filter((el) => typeof el === "object" && el.text !== undefined);
};
const hasilFilter = filter(1, { text: "wonderful" }, "next");

const fullName = (...rest: string[]): string => {
  const [firstName, lastName] = rest;
  return `${firstName} ${lastName}`;
};
const hasilFullName: string = fullName("John", "Doe");

export default function FungsiScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Function sederhana tanpa return</Text>
      <Text style={styles.output}>Cek console: "halo!"</Text>

      <Text style={styles.title}>Function sederhana dengan return</Text>
      <Text style={styles.output}>{tampung1}</Text>

      <Text style={styles.title}>Function dengan parameter</Text>
      <Text style={styles.output}>{tampung2}</Text>

      <Text style={styles.title}>Pengiriman parameter lebih dari satu</Text>
      <Text style={styles.output}>{hasilTampilkanAngka}</Text>

      <Text style={styles.title}>
        Inisialisasi parameter dengan nilai default
      </Text>
      <Text style={styles.output}>multiply(5): {hasilDefault1}</Text>
      <Text style={styles.output}>multiply(): {hasilDefault2}</Text>

      <Text style={styles.title}>Function dengan Conditional</Text>
      <Text style={styles.output}>{hasilTampilAngka}</Text>

      <Text style={styles.title}>Function dengan Looping di dalamnya</Text>
      <Text style={styles.output}>{hasilLooping.join(", ")}</Text>

      <Text style={styles.title}>Anonymous Function</Text>
      <Text style={styles.output}>{hasilPerkalian}</Text>

      <Text style={styles.title}>Default Parameters</Text>
      <Text style={styles.output}>multiply(5, 2): {hasilMultiply1}</Text>
      <Text style={styles.output}>multiply(5): {hasilMultiply2}</Text>

      <Text style={styles.title}>Rest Parameters in Function</Text>
      <Text style={styles.output}>{JSON.stringify(hasilFilter)}</Text>
      <Text style={styles.output}>{hasilFullName}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontWeight: "bold", fontSize: 16, marginTop: 16 },
  output: { fontSize: 14, color: "#333", marginTop: 4 },
});
