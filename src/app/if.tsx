import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function CekKelulusan(): React.JSX.Element {
  const nilaiUjian: number = 80;
  return (
    <View>
      <Text style={{ color: nilaiUjian >= 75 ? "green" : "red" }}>
        {nilaiUjian >= 75 ? "Selamat, Anda Lulus!" : "Maaf, Anda Belum Lulus."}
      </Text>
    </View>
  );
}

export function PeringatanCuaca(): React.JSX.Element {
  const suhuUdara: number = 38;
  return (
    <View>
      {suhuUdara > 35 && (
        <View style={styles.warningBox}>
          <Text style={styles.warningText}>
            Peringatan: Cuaca Sangat Panas Hari Ini!
          </Text>
        </View>
      )}
    </View>
  );
}

export function StatusLogin(): React.JSX.Element {
  const isLoggedIn: boolean = true;
  const namaUser: string = "Budi";
  return (
    <View>
      {isLoggedIn ? (
        <Text>Halo, {namaUser}!</Text>
      ) : (
        <Text>Silakan Login Terlebih Dahulu</Text>
      )}
    </View>
  );
}

export function DiskonKeranjang(): React.JSX.Element {
  const totalBelanja: number = 300000;
  const warna: string =
    totalBelanja > 500000 ? "purple" : totalBelanja >= 200000 ? "blue" : "gray";
  const teks: string =
    totalBelanja > 500000
      ? "Anda Mendapat Diskon 20%!"
      : totalBelanja >= 200000
        ? "Anda Mendapat Diskon 10%!"
        : "Belanja lebih banyak untuk dapat diskon!";

  return (
    <View>
      <Text style={{ color: warna }}>{teks}</Text>
    </View>
  );
}

export function StatusToko(): React.JSX.Element {
  const jamSekarang: number = 19;
  const status: string =
    jamSekarang >= 8 && jamSekarang <= 17 ? "Toko Buka" : "Toko Tutup";

  return (
    <View>
      <Text>{status}</Text>
    </View>
  );
}

export function ModeTampilan(): React.JSX.Element {
  const isDarkMode: boolean = true;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? "#121212" : "#FFFFFF",
        padding: 20,
      }}
    >
      <Text style={{ color: isDarkMode ? "white" : "black" }}>
        Contoh Teks Mode Tampilan
      </Text>
    </View>
  );
}

export function ValidasiPassword(): React.JSX.Element {
  const password: string = "123";
  return (
    <View>
      {password.length < 6 && (
        <Text style={{ color: "red" }}>
          Password terlalu pendek (minimal 6 karakter)
        </Text>
      )}
    </View>
  );
}

export function TarifParkir(): React.JSX.Element {
  const jenisKendaraan: string = "Mobil";
  return (
    <View>
      {jenisKendaraan === "Mobil" && <Text>Tarif Parkir: Rp 5.000 / jam</Text>}
      {jenisKendaraan === "Motor" && <Text>Tarif Parkir: Rp 2.000 / jam</Text>}
    </View>
  );
}

export function StokBarang(): React.JSX.Element {
  const stokBarang: number = 5;
  let teks: string = "";
  let warna: string = "";

  if (stokBarang > 10) {
    teks = "Stok Tersedia";
    warna = "green";
  } else if (stokBarang >= 1 && stokBarang <= 10) {
    teks = "Stok Terbatas! Segera Beli";
    warna = "orange";
  } else {
    teks = "Stok Habis";
    warna = "red";
  }

  return (
    <View>
      <Text style={{ color: warna }}>{teks}</Text>
    </View>
  );
}

export function RekomendasiFilm(): React.JSX.Element {
  const usiaPenonton: number = 15;
  let badge: string = "";

  if (usiaPenonton < 13) {
    badge = "Kategori: Semua Umur (SU)";
  } else if (usiaPenonton >= 13 && usiaPenonton <= 17) {
    badge = "Kategori: Remaja (R)";
  } else {
    badge = "Kategori: Dewasa (D)";
  }

  return (
    <View>
      <Text>{badge}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  warningBox: {
    backgroundColor: "#ffcccc",
    padding: 10,
    borderRadius: 8,
  },
  warningText: {
    color: "red",
    fontWeight: "bold",
  },
});
