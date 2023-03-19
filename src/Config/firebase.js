import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
    GoogleAuthProvider,
    onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, query, where, getDoc ,setDoc,doc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCqO_4JLoGaQAVGO8Sg4QXuo_ATlsY2y_U",
  authDomain: "untitled-ui-cdc8f.firebaseapp.com",
  projectId: "untitled-ui-cdc8f",
  storageBucket: "untitled-ui-cdc8f.appspot.com",
  messagingSenderId: "167877815255",
  appId: "1:167877815255:web:60a654aed16471d8893992",
  measurementId: "G-0YLLP0MFT4",
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    console.log(userAuth)
    const userRef = doc(db, "users", userAuth.uid);
    const snapShot = await getDoc(userRef);
    console.log(snapShot)
    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
        await setDoc(userRef, {
            displayName,
            email,
            createdAt,
            ...additionalData,
        });
        } catch (error) {
        console.log("error creating user", error.message);
        }
    }
    return userRef;
}
function getCurrentUser() {
    const user = auth.currentUser;
    if (user) {
      // Fetch user document from Firestore
      const q = query(collection(db, "users"), where("email", "==", user.email));
      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const userInfo = doc.data();
          console.log(userInfo.created_at.toDate()); // log creation date as a Date object
          console.log(userInfo.last_login ? userInfo.last_login.toDate() : null); // log last login time as a Date object or null
        });
      });
      return user;
    } else {
      return null;
    }
  }


export {
  app,
  analytics,
  auth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
 provider,
    getCurrentUser,
    onAuthStateChanged,
};
