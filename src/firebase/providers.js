import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        //const result = signInWithPopup(firebaseAuth,googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {user} = await signInWithPopup(firebaseAuth, new GoogleAuthProvider());
        const {displayName,photoURL,email,uid} = user;
        return {
            ok:true,
            displayName,
            photoURL,
            email,
            uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        return {
            ok:false,
            errorCode,
            errorMessage,
            email
        }
    }
}

export const registerUserWithEmailPassword = async({email,password,displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth,email,password);
        const {uid,photoUrl} = resp.user; 
        await updateProfile(firebaseAuth.currentUser,{displayName});
        return {
            ok: true,
            email,
            displayName,
            uid,
            photoUrl
        }
    } catch (error) {
        return {
            ok:false,
            errorMessage: error.message,
        }
    }
}

export const loginWithEmailPassword = async(emailUser,password) => {
    try {
        const {user} = await signInWithEmailAndPassword(firebaseAuth,emailUser,password);
        const {email,displayName,uid,photoURL} = user;
        return {
            ok: true,
            email,
            displayName,
            uid,
            photoURL
        }
    } catch (error) {
        return {
            ok:false,
            errorMessage: error.message,
        }
    }
}

export const logOutFireBase = async() => {
    return await firebaseAuth.signOut();
}