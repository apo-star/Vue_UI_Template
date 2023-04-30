import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateEmail,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  getDocs,
} from "firebase/firestore";

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
  //console.log(userAuth);
  const userRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);
  //console.log(snapShot);
  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    //const { lastLoginAt } = userAuth.metadata;
    //if I want to get the last login time
    const createdAt = new Date();

    if (displayName) {
      // Generate username from displayName
      const username = displayName.replace(/\s+/g, "").toLowerCase();
      let usernameTaken = true;
      let usernameToSave = username;
      let i = 1;

      // Check if username is already taken
      while (usernameTaken) {
        const querySnapshot = await getDocs(
          query(
            collection(db, "users"),
            where("username", "==", usernameToSave)
          )
        );
        if (querySnapshot.empty) {
          usernameTaken = false;
        } else {
          usernameToSave = username + i;
          i++;
        }
      }

      try {
        await setDoc(userRef, {
          displayName,
          email,
          photoURL,
          createdAt,
          username: usernameToSave, // set the final value of usernameToSave
          ...additionalData,
        });
        //await updateDoc(userRef, { lastLoginAt});
      } catch (error) {
        console.log("error creating user", error.message);
      }
    } else {
      // If no displayName, use email
      const username = email.split("@")[0].replace(/[^a-z]/g, "");
      let usernameTaken = true;
      let usernameToSave = username;
      let i = 1;

      // Check if username is already taken
      while (usernameTaken) {
        const querySnapshot = await getDocs(
          query(
            collection(db, "users"),
            where("username", "==", usernameToSave)
          )
        );
        if (querySnapshot.empty) {
          usernameTaken = false;
        } else {
          usernameToSave = username + i;
          i++;
        }
      }

      try {
        await setDoc(userRef, {
          displayName,
          email,
          photoURL,
          createdAt,
          username: usernameToSave, // set the final value of usernameToSave
          ...additionalData,
        });
        //await updateDoc(userRef, { lastLoginAt});
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
  }
  return userRef;
};
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
  updateProfile,
  updateDoc,
  db,
  updateEmail,
};
