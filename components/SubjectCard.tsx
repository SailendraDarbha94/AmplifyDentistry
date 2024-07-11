import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";

export function SubjectCard({ name, path, imageUrl }: { name: string, path: string, imageUrl:any }) {
    const router = useRouter()

  return (
    <TouchableOpacity className="max-h-40 w-[95%] border-2 border-black-200 rounded-xl shadow-md shadow-slate-700 mx-auto my-2 bg-sky-500 flex flex-wrap items-center flex-row" onPress={() => router.push(`years/subject/${path}`)}>
      <Text className="w-2/4 text-2xl font-extrabold text-white pl-2">
        {name}
      </Text>
      <View className="w-2/4">
        <Image
          source={imageUrl ? imageUrl : require("@/assets/images/splash.png")}
          resizeMode="cover"
          className="max-w-full max-h-full rounded-tr-lg rounded-br-lg"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: "100%",
    height: 300,
    opacity: 0.3
  },
  text: {
    color: 'white',
    fontSize: 24,
    opacity: 0.9,
    fontWeight: 'bold',
  },
});
