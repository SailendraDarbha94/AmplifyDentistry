import { SubjectCard } from "@/components/SubjectCard";
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
import Ionicons from "@expo/vector-icons/Ionicons";

export interface Quiz {
  id: string;
  question: string;
  answer: string;
  options: string[];
}

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import QuizQuestion from "@/components/QuizQuestion";
import BackgroundImage from "../subject/BackgroundImage";

export default function Home() {
  const { quiz } = useLocalSearchParams();
  const heading = quiz?.toString()?.split("-").join(" ");
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitle: "Back",
      headerTitle: "Subject",
    });
  }, [navigation]);
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [data, setData] = useState<Quiz[] | null>(null);
  const [score, setScore] = useState<number>(0);
  const apiKey = Constants.expoConfig?.extra?.NEXT_PUBLIC_GEMINI_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const finalPrompt = `You are a helpful assistant that will answer this question : ${prompt}`;

  const PROMPT = `You are a Professor who creates somewhat tough but fun multiple choice questions for students. 
  Now generate 5 quiz questions in the subject of ${heading} for 
  dental students in this JSON format
  {
    questions : {
      id: 1,
      question: "multiple choice question",
      answer: "text content of answer",
      options: [ "option 1", "option 2", "option 3", "option 4" ]
      }
  }
  make sure that the options should not have more than 2-3 words in them,
  make sure that the answer is strictly matching the correct option`;

  const getAiResponse = async () => {
    setLoading(true);
    try {
      const result = await model.generateContent(PROMPT);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      const splitText = text.split("json");
      const resplitText = splitText[1].split("```");
      const parsedResponse = JSON.parse(resplitText[0]);
      console.log("TEXT===========", parsedResponse);
      setData(parsedResponse.questions);
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

  useEffect(() => {
    getAiResponse();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<BackgroundImage subject={quiz} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{heading}</ThemedText>
      </ThemedView>
      {loading ? (
        <Text className="mt-10 p-2 text-3xl text-center mb-4 font-pbold">
          Loading...
        </Text>
      ) : (
        <View className="flex flex-row justify-evenly items-center">
          <Text>Score :</Text>
          <ThemedText type="subtitle">{score}</ThemedText>
        </View>
      )}
      {/* <View className="flex flex-row justify-between font-pmedium">
        <TouchableOpacity className="bg-sky-300 w-[45%] p-2 rounded-md text-center">
          <Text className="text-center">Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-500 w-[45%] rounded-md p-2 text-center">
          <Text className="text-center text-white">Retake</Text>
        </TouchableOpacity>
      </View> */}
      {data &&
        data.flatMap((quizQuestion: Quiz) => {
          return (
            <View key={quizQuestion.id}>
              <QuizQuestion setScore={setScore} quizQuestion={quizQuestion} />
            </View>
          );
        })}
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
