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
import { ref, get, child, set, getDatabase } from "firebase/database";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "@/firebaseConfig";

export default function AuthScreen() {

  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const auth = getAuth(app);
  const db = getDatabase(app);

  const createNewUser = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName
    ) {
      alert("Please fill the details");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          saveUserData(user.uid, firstName, lastName, user.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const saveUserData = async (
    userId: string,
    firstName: string,
    lastName: string,
    email: string | null
  ) => {
    try {
      set(ref(db, "users/" + userId), {
        firstName: firstName,
        lastName: lastName,
        email: email,
      })
        .then((callback) => console.log(callback))
        .finally(() => {
          alert("User data saved");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <Text className="mt-10 p-2 text-2xl text-center mb-4">
        Create an Account
      </Text>
      <View>
        <TextInput
          className="text-lg bg-blue-100 text-white  m-2 p-2 rounded-xl "
          placeholder="First Name"
          autoCapitalize="none"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          className="text-lg bg-blue-100 text-white  m-2 p-2 rounded-xl "
          placeholder="Last Name"
          autoCapitalize="none"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          className="text-lg bg-blue-100 text-white  m-2 p-2 rounded-xl "
          placeholder="E-Mail Address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="text-lg bg-blue-100 text-white  m-2 p-2 rounded-xl "
          placeholder="Password"
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          className="text-lg bg-blue-100 text-white  m-2 p-2 rounded-xl "
          placeholder="Confirm Password"
          autoCapitalize="none"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View className="flex flex-row justify-center items-center">
        <Text className="text-lg">Already have an account?</Text>
        <Button title="Login" onPress={() => router.push("/(auth)")} />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={createNewUser}>
          <Text style={styles.buttonText} className="text-center">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
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
