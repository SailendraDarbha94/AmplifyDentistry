import { SubjectCard } from "@/components/SubjectCard";
import {
  firstYear,
  fourthYear,
  secondYear,
  thirdYear,
} from "@/constants/subjects";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Constants from "expo-constants";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [data, setData] = useState<string>("");
  const apiKey = Constants.expoConfig?.extra?.NEXT_PUBLIC_GEMINI_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const finalPrompt = `You are a helpful assistant that will answer this question : ${prompt}`;

  const getAiResponse = async () => {
    setLoading(true);
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      setData(text);
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



  return (
    <SafeAreaView>
      {loading ? (
        <Text className="mt-10 p-2 text-3xl text-center mb-4 font-pbold">
          Loading...
        </Text>
      ) : (
        <Text className="mt-10 p-2 text-3xl text-center mb-4 font-pbold">
          Amplify {slug}
        </Text>
      )}
      <View>
        <TextInput
          className="text-lg bg-slate-200 border-2 border-gray-500 m-2 p-2 rounded-xl "
          placeholder="Enter Prompt"
          autoCapitalize="none"
          value={prompt}
          onChangeText={setPrompt}
        />
        <Button title="Ask" color="green" onPress={getAiResponse} />
      </View>
      <View><Text>{slug}</Text></View>
      {data ? (
        <View>
          <Text className="text-lg">{data}</Text>
        </View>
      ) : null}
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
