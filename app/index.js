import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS } from "@app/constants";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{ header: { backgroundColor: COLORS.lightWhite } }}
      />
    </SafeAreaView>
  );
};

export default Home;
