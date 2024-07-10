import {
  Image,
  StyleSheet,
  View,
  Platform,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app, { auth } from "@/firebaseConfig";
import { ThemedText } from "@/components/ThemedText";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //const auth = getAuth(app);

  const navigator = useNavigation();

  // const routeToTest = () => {
  //   router.push("/test-view/index");
  // };

  const loginUser = async () => {
    if (!email || !password) {
      alert("Please enter credentials");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("USER LOGGED IN");
          console.log("USER LOGGED IN", userCredential);
          router.push("/(tabs)");
        })
        .catch((err) => {
          setEmail("");
          setPassword("");
          alert("ERROR OCCURED");
          console.log(err);
        });
    }
  };

  return (
    <SafeAreaView>
      <Text className="mt-10 p-2 text-2xl text-center mb-4 font-pbold">
        Amplify Dentistry
      </Text>
      <View>
        <TextInput
          className="text-lg bg-slate-200 border-2 border-gray-500 m-2 p-2 rounded-xl "
          placeholder="E-Mail Address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="text-lg bg-slate-200 border-2 border-gray-500 m-2 p-2 rounded-xl "
          placeholder="Password"
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View className="flex flex-row justify-center items-center">
        <Text className="text-lg">Don't have an account?</Text>
        <Button
          title="Sign Up"
          onPress={() => router.push("/(auth)/sign-up")}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={loginUser}>
          <Text style={styles.buttonText} className="text-center">
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Link href="text-view">
        <ThemedText type="link">Go to home screen!</ThemedText>
      </Link>
      <Link href="years/slug/first-year">
        <ThemedText type="link">Go to second year!</ThemedText>
      </Link>
      <Link href="years/subject/Human-Physiology">
        <ThemedText type="link">Go to testing screen!</ThemedText>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginHorizontal: "auto",
    maxWidth: 120,
    minWidth: 100,
    backgroundColor: "#6b21a8", // Equivalent to bg-purple-700
    paddingHorizontal: 16, // Equivalent to px-4
    paddingVertical: 12, // Equivalent to py-3
    borderRadius: 12, // Equivalent to rounded-lg
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: "#fff", // Equivalent to text-white
    fontSize: 16, // Set text size
  },
});
