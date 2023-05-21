import { app, auth, updateProfile } from "./firebase.js";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app);

export const uploadImage = async (file, currentUser) => {
  const fileRef = ref(storage, currentUser.uid + ".jpg");

  //const setLoading = true;
  const snapShot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL });

  //setLoading(false);
  alert("Image uploaded successfully");
};

//storage

export { storage };
