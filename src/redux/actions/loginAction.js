import {auth,provider} from "../../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const SIGNIN="SIGNIN";
export const SIGNOUT="SIGNOUT";

export const signin=()=>{
    signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const user=result.user;
                    //console.log(user);
                    return user;

                }).catch((error) => {
                    console.log(error);
            });
        }

export const signout=()=>{
    auth.signOut();
}