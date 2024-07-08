import {
  Image,
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

export default function HomeScreen() {

  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/final/amplify-white-bg.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        {/* <ThemedText type="title">Years!</ThemedText> */}
        {/* <HelloWave /> */}
      </ThemedView>
      <View className="flex flex-row justify-evenly flex-wrap">
        <TouchableOpacity className="w-[44%] h-20 flex flex-row justify-end items-center border-r-2 border-b-2 border-black-200" onPress={() => router.push('/years/slug/something')}>
          <Image
            source={require("../../assets/final/blueTooth.png")}
            resizeMode="contain"
            className="w-10 h-10"
          />
        </TouchableOpacity>
        <TouchableOpacity className="w-[44%] h-20 flex flex-row justify-start items-center border-l-2 border-b-2 border-black-200">
          <Image
            source={require("../../assets/final/blueTooth.png")}
            resizeMode="contain"
            className="w-10 h-10"
          />
          <Image
            source={require("../../assets/final/blueTooth.png")}
            resizeMode="contain"
            className="w-10 h-10"
          />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-evenly flex-wrap">
        <TouchableOpacity className="w-[44%] h-20 flex flex-row justify-end items-center border-r-2 border-t-2 border-black-200">
          <Image
            source={require("../../assets/final/blueTooth.png")}
            resizeMode="contain"
            className="w-10 h-10"
          />
          <Image
            source={require("../../assets/final/blueTooth.png")}
            resizeMode="contain"
            className="w-10 h-10"
          />
          <Image
            source={require("../../assets/final/blueTooth.png")}
            resizeMode="contain"
            className="w-10 h-10"
          />
          <Image
            source={require("../../assets/final/blueTooth.png")}
            resizeMode="contain"
            className="w-10 h-10"
          />
        </TouchableOpacity>
        <TouchableOpacity className="w-[44%] h-20 flex flex-row justify-start items-center border-l-2 border-t-2 border-black-200">
          <Image
            source={require("../../assets/final/blueTooth.png")}
            resizeMode="contain"
            className="w-10 h-10"
          />
          <Image
            source={require("../../assets/final/blueTooth.png")}
            resizeMode="contain"
            className="w-10 h-10"
          />
          <Image
            source={require("../../assets/final/blueTooth.png")}
            resizeMode="contain"
            className="w-10 h-10"
          />
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    flex: 1,
    height: 178,
    width: "auto",
    position: "relative",
  },
});
