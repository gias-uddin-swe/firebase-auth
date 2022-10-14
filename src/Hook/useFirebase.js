import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "./firebaseConfig";

const useFirebase = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [userInfo, setUserInfo] = useState("");

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUserInfo(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const test2 = () => {
    console.log("ia m test 2");
  };

  return { handleGoogleLogin, test2, userInfo };
};

export default useFirebase;
