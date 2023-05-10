import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
/** for DB - TO DO */
// import { getDatabase, ref, set, onValue, remove, off } from 'firebase/database';
// import axios from 'axios';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: `${process.env.NEXT_PUBLIC_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: `${process.env.NEXT_PUBLIC_PROJECT_ID}.yummy-55c41.appspot.com`,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export class FirebaseService {
    checkLoginState = (setLoginState) => {
        const myAuth = getAuth();
        onAuthStateChanged(myAuth, (user) => {
            console.log('check Login', user);
            if (user) {
                const { uid, email, photoURL } = user;
                console.log('services: ', uid);
                setLoginState({
                    state: true,
                    user: {
                        uid,
                        email,
                        profile: photoURL,
                    },
                });
            }
        });
    };

    onLogin = async () => {
        const auth = getAuth();
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            return {
                type: 'success',
                token,
                user,
            };
        } catch (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential_1 = GoogleAuthProvider.credentialFromError(error);
            return {
                type: 'error',
                errorCode,
                errorMessage,
                email,
                credential_1,
            };
        }
    };

    signOut = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };
}
