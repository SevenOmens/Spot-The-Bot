import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer, navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { db } from './Core/Config';

import Login from './Screens/Login';
import HomeFeed from './Screens/HomeFeed';
import GameStart from './Screens/GameStart';
import GameScreen from './Screens/GameScreen';
import Fire from './Screens/Fire';
// import { create } from 'domain';
import { firebase } from 'firebase/app';
import { setDoc } from 'firebase/firestore';
const Stack = createNativeStackNavigator();

export default function App() {
	const Read = () => {};
	const Update = () => {};
	const Delete = () => {};

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Fire">
				<Stack.Screen name="Fire" component={Fire} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="GameScreen" component={GameScreen} />
				<Stack.Screen name="GameStart" component={GameStart} />
				<Stack.Screen name="HomeFeed" component={HomeFeed} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
