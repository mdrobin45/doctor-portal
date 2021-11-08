import {useEffect, useState} from 'react';
import
    {
        GoogleAuthProvider,
        getAuth,
        signInWithPopup,
        onAuthStateChanged 
    } from "firebase/auth";
import initializeFirebase from '../Firebase/initializeFirebase';

initializeFirebase()
const useFirebase = () =>
{
    // initialize state
    const [user, setUser] = useState([]);

    // Auth info
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google sign in
    const googleSignIn = () =>
    {
        signInWithPopup(auth, googleProvider)
            .then(result =>
            {
                setUser(result.user);
            })
    }

    // Update user every render
    useEffect(() =>
    {
        onAuthStateChanged(auth, user =>
        {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
        })
    },[auth])

    // Return function
    return {
        user,
        googleSignIn
    }
    
};

export default useFirebase;