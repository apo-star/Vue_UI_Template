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
  sendEmailVerification,
  sendPasswordResetEmail,
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
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
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
    const { displayName, email, photoURL, emailVerified } = userAuth;
    //const { lastLoginAt } = userAuth.metadata;
    //if I want to get the last login time
    const createdAt = new Date();

    const followers = [];
    const following = [];

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
          displayName, //no forget to have john for users with no displayName
          email,
          photoURL,
          emailVerified,
          createdAt,
          followers,
          following,
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
          emailVerified,
          createdAt,
          followers,
          following,
          username: usernameToSave, // set the final value of usernameToSave
          ...additionalData,
        });
        //await updateDoc(userRef, { lastLoginAt});
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }

    // Check if username is "muzardemoses" and if user is not already following "muzardemoses"

    if (email && email.toLowerCase() !== "muzardemoses@gmail.com") {
      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("email", "==", "muzardemoses@gmail.com")
        )
      );
      if (!querySnapshot.empty) {
        const muzarUser = querySnapshot.docs[0];
        const muzarUserId = muzarUser.id;
        const muzarData = muzarUser.data();
        const muzarFollowers = muzarData.followers || [];
        const muzarFollowing = muzarData.following || [];

        // Check if user is not already following "muzardemoses"
        if (!muzarFollowing.includes(userAuth.uid)) {
          // Add user to "muzardemoses" list of followers
          await updateDoc(doc(db, "users", muzarUserId), {
            followers: [...muzarFollowers, userAuth.uid],
          });

          // Add "muzardemoses" to user's list of following
          await updateDoc(userRef, {
            following: [...following, muzarUserId],
          });
        }
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
  sendEmailVerification,
  sendPasswordResetEmail,
};
