import { Quiz } from "@/app/years/quiz/[quiz]";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const OptionItem = ({ answerChecker, option }: any) => {
  const [color, setColor] = useState<string>("bg-fuchsia-200");
  return (
    <TouchableOpacity
      className={`w-[45%] p-2 my-1 rounded-md text-center ${color}`}
      onPress={() => answerChecker(option)}
    >
      <Text className="text-center">{option}</Text>
    </TouchableOpacity>
  );
};

export default function QuizQuestion({
  quizQuestion,
  setScore,
}: {
  quizQuestion: Quiz;
  setScore: any;
}) {
  const [disabled, setDisabled] = useState<boolean>(false);
  const answerChecker = async (params: string) => {
    if (params === quizQuestion.answer) {
      setScore((prev: number) => {
        return prev + 1;
      });
    } else {
      setScore((prev: number) => {
        return prev - 1;
      });
    }
  };

  return (
    <View className="">
      <Text className="text-xl font-psemibold border-b-2 border-black-100">
        {quizQuestion.question}
      </Text>
      <View className="flex flex-row justify-evenly items-center flex-wrap font-pregular">
        {quizQuestion.options.map((foo, idx) => {
          return (
            <OptionItem key={idx} answerChecker={answerChecker} option={foo} />
          );
        })}
      </View>
    </View>
  );
}
