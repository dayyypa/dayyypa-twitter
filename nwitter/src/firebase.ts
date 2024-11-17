// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyBtgY1KX8xfgWo4FOFQLpJNUPKf8tcaBYw',
	authDomain: 'nwitter-reloaded-5d787.firebaseapp.com',
	projectId: 'nwitter-reloaded-5d787',
	storageBucket: 'nwitter-reloaded-5d787.firebasestorage.app',
	messagingSenderId: '259077413854',
	appId: '1:259077413854:web:1d9fe32b0340b0b5f69b4f'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
