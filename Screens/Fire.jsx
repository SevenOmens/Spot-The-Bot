import { Text, View, Button } from 'react-native';
import { useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../Core/Config';

export default Fire = ({ navigation }) => {
	const [userDoc, setUserDoc] = useState(null);
	const Create = () => {
		const myDoc = doc(db, 'game', 'score');

		const docData = {
			Adam: 101,
		};
		setDoc(myDoc, docData)
			.then(() => {
				console.log('success');
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	const Read = () => {
		const myDoc = doc(db, 'game', 'score');

		getDoc(myDoc)
			.then((snapshot) => {
				if (snapshot.exists) {
					setUserDoc(snapshot.data());
					console.log(snapshot.data());
				} else {
					alert('No Document Found');
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#00ffff',
			}}
		>
			<Text>Test</Text>
			<Button title="Create" onPress={Create} />
			<Button title="Read" onPress={Read} />
			{userDoc != null && <Text> {userDoc.adam}</Text>}
		</View>
	);
};
