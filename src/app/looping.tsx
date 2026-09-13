import { ScrollView, StyleSheet, Text } from "react-native";

export default function LoopingScreen() {
  const outputSoal1: string[] = [];
  for (let i: number = 1; i <= 8; i++) {
    outputSoal1.push(`Tiket antrean nomor: ${i}`);
  }

  const outputSoal2: string[] = [];
  for (let i: number = 5; i >= 1; i--) {
    outputSoal2.push(String(i));
  }
  outputSoal2.push("Roket Meluncur!");

  const outputSoal3: string[] = [];
  let deret1: number = 5;
  let jumlah1: number = 0;
  for (; deret1 > 0; deret1--) {
    jumlah1 += deret1;
    outputSoal3.push(`Total poin: ${jumlah1}`);
  }

  const outputSoal4: string[] = [];
  for (let deret2: number = 2; deret2 < 10; deret2 += 2) {
    outputSoal4.push(`Meja VIP nomor: ${deret2}`);
  }

  const outputSoal5: string[] = [];
  for (let i: number = 0; i <= 6; i++) {
    if (i === 3) {
      outputSoal5.push("Peringatan: Suhu Mesin Stabil!");
    } else {
      outputSoal5.push(String(i));
    }
  }

  const outputSoal6: string[] = [];
  let flag: number = 1;
  while (flag < 10) {
    outputSoal6.push(`Memanggil nasabah antrean ke-${flag}`);
    flag++;
  }

  const outputSoal7: string[] = [];
  let deret3: number = 4;
  let jumlah2: number = 0;
  while (deret3 > 0) {
    jumlah2 += deret3;
    deret3--;
    outputSoal7.push(`Tabungan: ${jumlah2}`);
  }

  const outputSoal8: string[] = [];
  let i2: number = 0;
  while (i2 < 5) {
    if (i2 === 3) {
      outputSoal8.push("Awas Halangan Dekat!");
    } else {
      outputSoal8.push(String(i2));
    }
    i2++;
  }

  const outputSoal9: string[] = [];
  let flagFix: number = 1;
  while (flagFix < 10) {
    outputSoal9.push(`Iterasi ke-${flagFix}`);
    flagFix++;
  }

  const outputSoal10: string[] = [];
  for (let kupon: number = 1; kupon <= 10; kupon++) {
    outputSoal10.push(kupon % 2 === 0 ? "Kupon Genap" : "Kupon Ganjil");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Soal 1: Antrean Tiket</Text>
      <Text style={styles.output}>{outputSoal1.join(", ")}</Text>

      <Text style={styles.title}>Soal 2: Hitung Mundur Roket</Text>
      <Text style={styles.output}>{outputSoal2.join(", ")}</Text>

      <Text style={styles.title}>Soal 3: Akumulasi Poin</Text>
      <Text style={styles.output}>{outputSoal3.join(", ")}</Text>

      <Text style={styles.title}>Soal 4: Nomor Meja Genap</Text>
      <Text style={styles.output}>{outputSoal4.join(", ")}</Text>

      <Text style={styles.title}>Soal 5: Filter Pesan Sistem</Text>
      <Text style={styles.output}>{outputSoal5.join(", ")}</Text>

      <Text style={styles.title}>Soal 6: Antrean Loket Bank</Text>
      <Text style={styles.output}>{outputSoal6.join(", ")}</Text>

      <Text style={styles.title}>Soal 7: Celengan Tabungan</Text>
      <Text style={styles.output}>{outputSoal7.join(", ")}</Text>

      <Text style={styles.title}>Soal 8: Sensor Parkir</Text>
      <Text style={styles.output}>{outputSoal8.join(", ")}</Text>

      <Text style={styles.title}>Soal 9: Perbaikan Infinite Loop</Text>
      <Text style={styles.output}>{outputSoal9.join(", ")}</Text>

      <Text style={styles.title}>Soal 10: Pola Undian Kupon</Text>
      <Text style={styles.output}>{outputSoal10.join(", ")}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontWeight: "bold", fontSize: 16, marginTop: 16 },
  output: { fontSize: 14, color: "#333", marginTop: 4 },
});
