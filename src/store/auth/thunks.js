import { loginWithEmailPassword, logOutFireBase, registerUserWithEmailPassword, signInWithGoogle } from "../../fireBase/providers";
import { checkingCredentials, logOut,logIn } from "./"

export const checkingAuthentication = ( email,password ) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () =>{
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if(!result.ok) return dispatch(logOut(result.errorMessage));

        dispatch(logIn(result));
    }
}

export const startRegisterUserEmailPassword = ({email,password,displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const {ok,uid,photoUrl,errorMessage} = await registerUserWithEmailPassword({email,password,displayName});
        if( !ok )return dispatch( logOut({errorMessage}) );
        dispatch(logIn({uid,photoUrl,displayName,email}));

    }
}

export const startLoginEmailPassword = (emailUser,password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword(emailUser,password);
        if(!result.ok) return dispatch(logOut(result));
        dispatch(logIn(result));
    }
}

export const startLogOut = () => {
    return async(dispatch) => {
        try {
            await logOutFireBase();
            dispatch(logOut({errorMessage:''}));
        } catch (error) {
            console.log(error);
        }

    }
}