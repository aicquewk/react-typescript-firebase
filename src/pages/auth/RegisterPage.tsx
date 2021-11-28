import React, { useState } from 'react'
import app from '../../config/firebase';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const onClickCreateAccount = (email:string, password:string) => {
    console.log(`email`, email);
    console.log(`password`, password);
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(`user`, user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}


const onClickGmail = () => {
    
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

}


const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue text-black hover:bg-green-dark focus:outline-none my-1 border border-grey-light"
                        onClick={() => onClickCreateAccount(email, password)}
                    >Create Account</button>
                    
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue text-black hover:bg-green-dark focus:outline-none my-1 border border-grey-light"
                        onClick={() => onClickGmail()}
                    >Gmail</button>

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue text-black hover:bg-green-dark focus:outline-none my-1 border border-grey-light"
                        onClick={() => onClickCreateAccount(email, password)}
                    >Facebook</button>

                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?  
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                         Log in
                    </a>.
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
