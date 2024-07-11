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
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right", "bottom"]}>
      <View className="w-full h-2/6">
        <Image
          source={require("../../assets/final/amplify-white-bg.jpg")}
          resizeMode="cover"
          className="w-full h-full"
        />
      </View>
      <View className="h-4/6">
        <View className="flex flex-row justify-evenly flex-wrap mb-2">
          <TouchableOpacity
            className="w-[44%] h-20 flex flex-row justify-end items-center border-r-2 border-b-2 border-black-200"
            onPress={() => router.push("/years/slug/first-year")}
          >
            <Image
              source={require("../../assets/final/blueTooth.png")}
              resizeMode="contain"
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[44%] h-20 flex flex-row justify-start items-center border-l-2 border-b-2 border-black-200"
            onPress={() => router.push("/years/slug/second-year")}
          >
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
        <View className="flex flex-row justify-evenly flex-wrap mt-2">
          <TouchableOpacity
            className="w-[44%] h-20 flex flex-row justify-end items-center border-r-2 border-t-2 border-black-200"
            onPress={() => router.push("/years/slug/fourth-year")}
          >
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
          <TouchableOpacity
            className="w-[44%] h-20 flex flex-row justify-start items-center border-l-2 border-t-2 border-black-200"
            onPress={() => router.push("/years/slug/third-year")}
          >
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
      </View>
    </SafeAreaView>
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
