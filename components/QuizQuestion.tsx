import { Quiz } from "@/app/years/quiz/[quiz]";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function QuizQuestion({
  quizQuestion,
  setScore,
}: {
  quizQuestion: Quiz;
  setScore: any;
}) {
  const [disabled, setDisabled] = useState<boolean>(false);
  const answerChecker = async (params: string) => {
    setDisabled(true);
    if (params === quizQuestion.answer) {
      setScore((prev: number) => {
        return prev + 3;
      });
    } else {
      setScore((prev: number) => {
        return prev - 1;
      });
    }
  };

  return (
    <View className="">
      <Text className="text-lg font-psemibold">
        {quizQuestion.question}
      </Text>
      {disabled ? (
        <View className="border-y-2 border-black-200 py-1">
          <Text className="text-lg font-psemibold">
            Answer : {quizQuestion.answer}
          </Text>
        </View>
      ) : (
        <View className="flex flex-row justify-evenly items-center flex-wrap font-pregular">
          <TouchableOpacity
            disabled={disabled}
            className="bg-fuchsia-200 w-[45%] p-2 my-1 rounded-md text-center"
            onPress={() => answerChecker(quizQuestion.options[0])}
          >
            <Text className="text-center">{quizQuestion.options[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={disabled}
            className="bg-fuchsia-200 w-[45%] p-2 my-1 rounded-md"
            onPress={() => answerChecker(quizQuestion.options[1])}
          >
            <Text className="text-center">{quizQuestion.options[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={disabled}
            className="bg-fuchsia-200 w-[45%] p-2 my-1 rounded-md text-center"
            onPress={() => answerChecker(quizQuestion.options[2])}
          >
            <Text className="text-center">{quizQuestion.options[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={disabled}
            className="bg-fuchsia-200 w-[45%] p-2 my-1 rounded-md text-center"
            onPress={() => answerChecker(quizQuestion.options[3])}
          >
            <Text className="text-center">{quizQuestion.options[3]}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
