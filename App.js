import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#e8ecf4",
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require("./assets/images/logo.png")}
            alt="Logo"
          />
          <Text style={styles.title}>Organogram</Text>
          <Text style={styles.subTitle}>
            All your business solutions in one app
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address:</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={styles.inputControl}
              value={form.email}
              placeholder="jane@example.com"
              placeholderTextColor="#6b7280ef"
              onChangeText={(email) => setForm({ ...form, email })}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password:</Text>
            <TextInput
              secureTextEntry
              style={styles.inputControl}
              value={form.password}
              placeholder="***********"
              placeholderTextColor="#6b7280ef"
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle press
                Alert.alert("Successfully logged in!");
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{ marginTop: "auto" }}
            onPress={() => {
              // handle press
            }}
          >
            <Text style={styles.formFooter}>
              Don't have an account?{" "}
              <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
  },
  header: {
    marginVertical: 36,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    color: "#1e1e1e",
    marginBottom: 0,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#929292",
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    height: 44,
    color: "#222",
  },
  form: {
    marginTop: 15,
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  btn: {
    backgroundColor: "#072ac8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#072ac8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
