import { GoogleGenerativeAI } from "@google/generative-ai";
import Constants from "expo-constants";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
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
import Ionicons from "@expo/vector-icons/Ionicons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundImage from "./BackgroundImage";

export default function Home() {
  const { subject } = useLocalSearchParams();
  const heading = subject?.toString()?.split("-").join(" ");
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitle: "Back",
      headerTitle: "Subject",
    });
  }, [navigation]);
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [data, setData] = useState<string | null>(null);
  const apiKey = Constants.expoConfig?.extra?.NEXT_PUBLIC_GEMINI_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const finalPrompt = `You are a helpful somewhat jovial dental professor that will answer this question : ${prompt}. You shall politely decline questions about any other topic or any other requests that do not have anything to do with medical field.`;

  const getAiResponse = async () => {
    setLoading(true);
    try {
      const result = await model.generateContent(finalPrompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      setData(text.toString());
      setLoading(false);
      // const result = await model.generateContentStream([finalPrompt]);
      // if (result) {
      //   setLoading(false);
      //   console.log(result);
      //   setPrompt("");
      // }
      // for await (let chunk of result.stream) {
      //   console.log(chunk)
      //   const chunkText = chunk.text();
      //   setData((prev) => {
      //     let newText = prev + chunkText;
      //     return newText
      //   });
      //  }
    } catch (err) {
      setLoading(false);
      console.log("ERROR_____________________", JSON.stringify(err));
    }
  };

  const [tester, setTester] = useState<any>(null);
  const bgImager = async () => {
    switch (subject) {
      case "Human-Anatomy":
        setTester(
          <Image
            source={require("@/assets/subjects/Human-Anatomy.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Human-Physiology":
        setTester(
          <Image
            source={require("@/assets/subjects/Human-Physiology.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Dental-Anatomy-&-Histology":
        setTester(
          <Image
            source={require("@/assets/subjects/Dental-Anatomy-&-Histology.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Biochemistry":
        setTester(
          <Image
            source={require("@/assets/subjects/Biochemistry.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      default:
        <Image
          source={require("@/assets/final/first-year.png")}
          resizeMode="cover"
          className="w-full h-full"
        />;
    }
  };
  useEffect(() => {
    bgImager();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <BackgroundImage subject={subject} />
        // tester ? (
        //   tester
        // ) : (
        //   <Image
        //     source={require("@/assets/final/first-year.png")}
        //     resizeMode="cover"
        //     className="w-full h-full"
        //   />
        // )
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{heading}</ThemedText>
      </ThemedView>
      {loading ? (
        <Text className="mt-10 p-2 text-3xl text-center mb-4 font-pbold">
          Loading...
        </Text>
      ) : (
        <View>
          <TextInput
            className="text-lg bg-slate-200 border-2 border-gray-500 m-2 p-2 rounded-xl "
            placeholder="Enter your doubt"
            autoCapitalize="none"
            value={prompt}
            onChangeText={setPrompt}
          />
          <Button title="Ask" color="green" onPress={getAiResponse} />
        </View>
      )}
      <View>
        <Text className="font-pmedium text-lg">{data ? data : ""}</Text>
      </View>
      {/* <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
          to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible> */}
      {/* <View className="flex flex-row justify-between">
        <TouchableOpacity className="bg-fuchsia-400 w-[45%] p-2 rounded-md text-center" onPress={() => router.push(`/years/quiz/${subject}`)}>
          <Text>Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-fuchsia-400 w-[45%] rounded-md p-2 text-center">
          <Text>Button</Text>
        </TouchableOpacity>
      </View> */}
    </ParallaxScrollView>
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
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
