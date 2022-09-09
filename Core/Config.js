import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCKzVg-2Plvv8lm0RiMONnEtOX3ryV9y58',
	authDomain: 'spot-the-bot-test-52a8f.firebaseapp.com',
	projectId: 'spot-the-bot-test-52a8f',
	storageBucket: 'spot-the-bot-test-52a8f.appspot.com',
	messagingSenderId: '288024872254',
	appId: '1:288024872254:web:4002e43504b14d34d5986f',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
