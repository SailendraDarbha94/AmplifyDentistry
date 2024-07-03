import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import { useRouter } from "expo-router";
import { auth } from "@/firebaseConfig";
import { User } from "@/constants/interaces";

export default function TabTwoScreen() {
  const [user, setUser] = useState<User | null>(null);

  //const auth = getAuth(app)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("USER DETAILS", user);
      }
    });
  }, []);
  const router = useRouter()
  const signOutUser = async () => {
    signOut(auth)
      .then(() => {
        console.log("USER SIGNED OUT");
        router.push('/(auth)');
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="h-5/6 flex justify-start">
        <View className="h-4/6">
          <Image
            className="max-w-full max-h-full"
            resizeMode="contain"
            source={require("../../assets/images/icon.png")}
          />
        </View>
        <View className="h-2/6 pt-4 pl-4">
          <Text className="text-4xl font-bold my-2 underline">Profile</Text>
          <Text className="text-lg font-light">Email : {user?.email}</Text>
          <Text className="text-lg font-light">ID : {user?.uid}</Text>
          <Text className="text-lg font-light">{user?.emailVerified ? 'Email Verified': 'Email Not Verified'}</Text>
        </View>
      </View>
      <View className="h-1/6 flex justify-center items-center bg-white">
        <TouchableOpacity style={styles.button} onPress={signOutUser}>
          <Text style={styles.buttonText} className="text-center">
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: "auto",
    maxWidth: 120,
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
  imager: {
    maxWidth: 40,
    maxHeight: 40
  },
  buttonText: {
    color: "#fff", // Equivalent to text-white
    fontSize: 16, // Set text size
  },
});