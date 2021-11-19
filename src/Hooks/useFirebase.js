import {useEffect, useState} from 'react';
import {GoogleAuthProvider, getAuth,signOut , signInWithPopup,onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from '../Firebase/initializeFirebase';
import Swal from 'sweetalert2';

initializeFirebase()
const useFirebase = () =>
{
    // initialize state
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Auth info
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // Get email
    const getEmail = (e) =>
    {
        const inputValue = e.target.value;
        setEmail(inputValue);
    }

    // Get password
    const getPassword = (e) =>
    {
        const inputValue = e.target.value;
        setPassword(inputValue);
    }

    // Sign up with credential
    const registerWithCredential = (navigate) =>
    {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            setUser(user)
            if (user) {
                Swal.fire({
                    position: 'center center',
                    icon: 'success',
                    title: 'Register Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            switch (errorCode) {
                case 'auth/email-already-in-use':
                    Swal.fire({
                        position: 'center center',
                        icon: 'warning',
                        title: 'Account already exist',
                        showConfirmButton: false,
                        timer: 1500
                    }) 
                    break;
                case 'auth/weak-password':
                    Swal.fire({
                        position: 'center center',
                        icon: 'warning',
                        title: 'Weak Password',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    break
                case 'auth/invalid-email':
                    Swal.fire({
                        position: 'center center',
                        icon: 'warning',
                        title: 'Invalid Email',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    break
                default:
                    
            }
        });
    }

    // Google sign in
    const googleSignIn = () =>
    {
        signInWithPopup(auth, googleProvider)
            .then(result =>
            {
                setUser(result.user);
            })
    }
    // Credential Login
    const credentialLogin = (navigate) =>
    {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential =>
            {
                const user = userCredential.user;
                setUser(user);
                if (user) {
                    Swal.fire({
                        position: 'center center',
                        icon: 'success',
                        title: 'Login Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                switch (errorCode) {
                    case 'auth/wrong-password':
                        Swal.fire({
                            position: 'center center',
                            icon: 'error',
                            title: 'Incorrect email or password',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        break
                    case 'auth/user-not-found':
                        Swal.fire({
                            position: 'center center',
                            icon: 'error',
                            title: 'Incorrect email or password',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        break
                    default:
                        
                }
            });
    }

    // Log out
    const logOut = () =>
    {
       signOut(auth).then(() => {
            Swal.fire({
                position: 'center center',
                icon: 'success',
                title: 'Log out successful',
                showConfirmButton: false,
                timer: 1500
            })
           setUser({});
       }).catch((error) =>
       {
        const errorCode = error.code;
        }); 
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
        logOut,
        getEmail,
        getPassword,
        googleSignIn,
        credentialLogin,
        registerWithCredential
    }
    
};

export default useFirebase;