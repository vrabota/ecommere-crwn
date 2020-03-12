import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNrx8_m7ac8arD9oJKWgHhZyfe-meGgHQ",
    authDomain: "ecommerce-app-87077.firebaseapp.com",
    databaseURL: "https://ecommerce-app-87077.firebaseio.com",
    projectId: "ecommerce-app-87077",
    storageBucket: "ecommerce-app-87077.appspot.com",
    messagingSenderId: "604424958129",
    appId: "1:604424958129:web:151bf3d1db18a1df343290"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});

export const authWithGoogle = () => auth.signInWithPopup(provider);


export const createUserProfileDocument = async (user, additionalData) => {
  if(!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const userSnapshot = await userRef.get();
    if (!userSnapshot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (e) {
            console.log(e);
        }
    }
    return userRef;
};
