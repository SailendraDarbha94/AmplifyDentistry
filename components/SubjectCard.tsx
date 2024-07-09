import { StyleSheet, View, Text, Image } from "react-native";

export function SubjectCard({ name }: { name: string }) {
  return (
    <View className="max-h-32 w-[95%] rounded-xl shadow-md shadow-slate-700 mx-auto my-2 bg-orange-500 flex flex-wrap items-center flex-row px-2">
      <Text className="w-2/3 text-2xl font-extrabold text-white">
        {name}
      </Text>
      <View className="w-1/3">
        <Image
          source={require("../assets/final/blueTooth.png")}
          resizeMode="stretch"
          className="max-w-full max-h-full"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
