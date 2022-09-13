import { NavigationContainer, navigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-url-polyfill/auto";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  DotGothic16_400Regular,
} from "@expo-google-fonts/dotgothic16";
import { StatusBar } from "react-native";
import { useState } from "react";

import Login from "./Screens/Login";
import HomeFeed from "./Screens/HomeFeed";
import GameStart from "./Screens/GameStart";
import GameScreen from "./Screens/GameScreen";
import GameFinish from "./Screens/GameFinish";
const Stack = createNativeStackNavigator();

export default function App() {
  const [score, setScore] = useState(0);
  const [topic, setTopic] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  StatusBar.setHidden(true);
  let [fontsLoaded] = useFonts({
    DotGothic16_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator ini>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="GameScreen" options={{ headerShown: false }}>
            {(props) => (
              <GameScreen score={score} setScore={setScore} {...props} />
            )}
          </Stack.Screen>
          <Stack.Screen name="GameStart" options={{ headerShown: false }}>
            {(props) => (
              <GameStart
                score={score}
                topic={topic}
                setTopic={setTopic}
                aiPrompt={aiPrompt}
                setAiPrompt={setAiPrompt}
                {...props}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="HomeFeed"
            component={HomeFeed}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="GameFinish"
            options={{ headerShown: false }}
            component={GameFinish}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
