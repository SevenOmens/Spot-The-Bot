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
import GetLeaderboard from "./Screens/Leaderboard";

const Stack = createNativeStackNavigator();

export default function App() {
  const [username, setUsername] = useState("");

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
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => (
              <Login username={username} setUsername={setUsername} {...props} />
            )}
          </Stack.Screen>
          <Stack.Screen name="GameScreen" options={{ headerShown: false }}>
            {(props) => <GameScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="GameStart"
            component={GameStart}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="HomeFeed" options={{ headerShown: false }}>
            {(props) => <HomeFeed username={username} {...props} />}
          </Stack.Screen>
          <Stack.Screen name="GameFinish" options={{ headerShown: false }}>
            {(props) => <GameFinish username={username} {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="Leaderboard"
            options={{ headerShown: false }}
            component={GetLeaderboard}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

import { LogBox } from "react-native";

if (__DEV__) {
  const ignoreWarns = [
    "EventEmitter.removeListener",
    "[fuego-swr-keys-from-collection-path]",
    "Setting a timer for a long period of time",
    "ViewPropTypes will be removed from React Native",
    "AsyncStorage has been extracted from react-native",
    "exported from 'deprecated-react-native-prop-types'.",
    "Non-serializable values were found in the navigation state.",
    "VirtualizedLists should never be nested inside plain ScrollViews",
  ];

  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };

  LogBox.ignoreLogs(ignoreWarns);
}
