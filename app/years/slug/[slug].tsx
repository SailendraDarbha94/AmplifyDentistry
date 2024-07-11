import { SubjectCard } from "@/components/SubjectCard";
import TestCard from "@/components/TestCard";
import {
  firstYear,
  fourthYear,
  secondYear,
  thirdYear,
} from "@/constants/subjects";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Constants from "expo-constants";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Platform,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  ScrollViewComponent,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { slug } = useLocalSearchParams();
  const heading = slug?.toString()?.split("-").join(" ");
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitle: "Back",
      headerTitle: heading,
    });
  }, [navigation, heading]);
  const [loading, setLoading] = useState<boolean>(false);

  const yearWiseBackgrounds = () => {
    switch (slug) {
      case "first-year":
        return (
          <Image
            source={require("@/assets/final/first-year.png")}
            resizeMode="cover"
            className="w-full h-full"
          />
        );
      case "second-year":
        return (
          <Image
            source={require("@/assets/final/second-year.png")}
            resizeMode="cover"
            className="w-full h-full"
          />
        );
      case "third-year":
        return (
          <Image
            source={require("@/assets/final/third-year.png")}
            resizeMode="cover"
            className="w-full h-full"
          />
        );
      case "fourth-year":
        return (
          <Image
            source={require("@/assets/final/fourth-year.png")}
            resizeMode="cover"
            className="w-full h-full"
          />
        );
    }
  };
  const yearWiseSubjects = () => {
    switch (slug) {
      case "first-year":
        return (
          <ScrollView>
            {firstYear.flatMap((subject: any) => {
              return (
                <SubjectCard
                  imageUrl={subject.uri}
                  key={subject.id}
                  name={subject.name}
                  path={subject.slug}
                />
              );
            })}
          </ScrollView>
        );
      case "second-year":
        return (
          <ScrollView>
            {secondYear.flatMap((subject: any) => {
              return (
                <SubjectCard
                  imageUrl={subject.uri}
                  key={subject.id}
                  name={subject.name}
                  path={subject.slug}
                />
              );
            })}
          </ScrollView>
        );
      case "third-year":
        return (
          <ScrollView>
            {thirdYear.flatMap((subject: any) => {
              return (
                <SubjectCard
                  imageUrl={subject.uri}
                  key={subject.id}
                  name={subject.name}
                  path={subject.slug}
                />
              );
            })}
          </ScrollView>
        );
      case "fourth-year":
        return (
          <ScrollView>
            {fourthYear.flatMap((subject: any) => {
              return (
                <SubjectCard
                  imageUrl={subject.uri}
                  path={subject.slug}
                  key={subject.id}
                  name={subject.name}
                />
              );
            })}
          </ScrollView>
        );
    }
  };

  return (
    <SafeAreaView className="flex-1" edges={["left", "right", "bottom"]}>
      <View className="bg-purple-300 h-2/5 flex justify-center border-b-4 border-black-200">
        {loading ? (
          <Text className="p-2 text-3xl text-center font-pbold bg">
            Loading...
          </Text>
        ) : (
          <View className="w-full h-full">{yearWiseBackgrounds()}</View>
        )}
      </View>
      <View className="h-3/5">{yearWiseSubjects()}</View>
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
