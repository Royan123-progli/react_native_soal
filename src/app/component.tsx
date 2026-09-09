import React, { useState } from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    Image,
    ImageSourcePropType,
    Modal,
    Pressable,
    ScrollView,
    SectionList,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface UserCardProps {
  name: string;
  status: string;
  imageUrl: string;
}

function UserCard({
  name,
  status,
  imageUrl,
}: UserCardProps): React.JSX.Element {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

export function DirektoriAnggota(): React.JSX.Element {
  return (
    <View>
      <UserCard
        name="Budi Santoso"
        status="Aktif"
        imageUrl="https://placekitten.com/100/100"
      />
      <UserCard
        name="Siti Aminah"
        status="Alumni"
        imageUrl="https://placekitten.com/101/101"
      />
    </View>
  );
}

export function LoginForm(): React.JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Masukkan email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Masukkan password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Pressable
        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.6 : 1 }]}
        onPress={() => console.log("Login ditekan")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

interface Produk {
  id: string;
  nama: string;
}

const daftarProduk: Produk[] = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  nama: `Produk ${i + 1}`,
}));

export function KatalogProduk(): React.JSX.Element {
  return (
    <FlatList
      data={daftarProduk}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.produkItem}>
          <Text>{item.nama}</Text>
        </View>
      )}
    />
  );
}

const kategoriMateri: string[] = [
  "Matematika",
  "Fisika",
  "Kimia",
  "Biologi",
  "Sejarah",
];

export function HalamanPembelajaran(): React.JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal style={styles.kategoriScroll}>
        {kategoriMateri.map((kategori, index) => (
          <View key={index} style={styles.kategoriItem}>
            <Text>{kategori}</Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.artikelText}>
          Ini adalah konten artikel pembelajaran yang panjang dan bisa digulir
          ke bawah...
        </Text>
      </ScrollView>
    </View>
  );
}

type ButtonVariant = "primary" | "success" | "danger";

interface MyButtonProps {
  title: string;
  onPress: () => void;
  variant: ButtonVariant;
}

export function MyButton({
  title,
  onPress,
  variant,
}: MyButtonProps): React.JSX.Element {
  const warnaLatar: string =
    variant === "primary"
      ? "#2196f3"
      : variant === "success"
        ? "#4caf50"
        : "#f44336";

  return (
    <TouchableOpacity
      style={[styles.myButton, { backgroundColor: warnaLatar }]}
      onPress={onPress}
    >
      <Text style={styles.myButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function FetchDataScreen(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const handleFetch = (): void => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <View>
      <Button title="Fetch Data" onPress={handleFetch} />
      <Modal visible={loading} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <ActivityIndicator size="large" />
            <Text>Memuat data...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

interface CustomImageProps {
  source: ImageSourcePropType;
}

export function CustomImage({ source }: CustomImageProps): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={styles.imageContainer}>
      <Image
        source={source}
        style={styles.customImage}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <ActivityIndicator style={StyleSheet.absoluteFill} size="small" />
      )}
    </View>
  );
}

interface NilaiSection {
  title: string;
  data: string[];
}

const dataNilai: NilaiSection[] = [
  {
    title: "Mata Pelajaran Kejuruan",
    data: ["Pemrograman: 90", "Basis Data: 85"],
  },
  {
    title: "Mata Pelajaran Umum",
    data: ["Matematika: 80", "Bahasa Indonesia: 88"],
  },
];

export function DashboardNilai(): React.JSX.Element {
  return (
    <SectionList
      sections={dataNilai}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text style={styles.sectionItem}>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
    />
  );
}

export function PilihanMode(): React.JSX.Element {
  const [selected, setSelected] = useState<string>("Light Mode");
  const opsiMode: string[] = ["Light Mode", "Dark Mode", "System Default"];

  return (
    <View>
      {opsiMode.map((opsi) => (
        <TouchableOpacity
          key={opsi}
          style={[styles.opsiItem, selected === opsi && styles.opsiAktif]}
          onPress={() => setSelected(opsi)}
        >
          <Text>{opsi}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export function KebijakanPrivasi(): React.JSX.Element {
  const [agreed, setAgreed] = useState<boolean>(false);

  return (
    <View>
      <View style={styles.switchRow}>
        <Switch value={agreed} onValueChange={setAgreed} />
        <Text style={styles.switchText}>
          Saya menyetujui Syarat & Ketentuan
        </Text>
      </View>
      <Button
        title="Submit"
        disabled={!agreed}
        onPress={() => console.log("Data terkirim")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 8 },
  name: { fontSize: 16, fontWeight: "bold" },
  status: { fontSize: 14, color: "#555" },

  container: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },

  produkItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  kategoriScroll: { flexGrow: 0, marginBottom: 10 },
  kategoriItem: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  artikelText: { padding: 15, lineHeight: 22 },

  myButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  myButtonText: { color: "white", fontWeight: "bold" },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },

  imageContainer: { width: 100, height: 100, justifyContent: "center" },
  customImage: { width: 100, height: 100, borderRadius: 8 },

  sectionHeader: {
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "#f0f0f0",
    padding: 8,
  },
  sectionItem: { padding: 10 },

  opsiItem: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#eee",
    marginBottom: 8,
  },
  opsiAktif: { backgroundColor: "#4caf50" },

  switchRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  switchText: { marginLeft: 10 },
});
