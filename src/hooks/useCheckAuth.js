import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react'
import { firebaseAuth } from '../fireBase/config'
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from '../store/auth';

export const useCheckAuth = () => {
 
    const {status} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
      
      onAuthStateChanged(firebaseAuth,async( user ) =>{
        if(!user) return dispatch(logOut({errorMessage:''}));
        const {uid,email,displayName,photoURL} = user;
        dispatch(logIn({uid,email,displayName,photoURL}));
      });
      
    }, [])
    
    return {
        status
    }
}