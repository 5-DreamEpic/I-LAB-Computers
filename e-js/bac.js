
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";

import { GoogleAuthProvider, signInWithRedirect, getRedirectResult} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg9myN_3UiCMe3SEEPsy45dYEgqiBgHKk",
  authDomain: "i-labcomputers.firebaseapp.com",
  projectId: "i-labcomputers",
  storageBucket: "i-labcomputers.appspot.com",
  messagingSenderId: "945886591619",
  appId: "1:945886591619:web:86e9af065d75c2247639b6",
  measurementId: "G-39WTC8YS17"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();
const database = getDatabase(app);
const provider = new GoogleAuthProvider(app);


// My code

btnSign.addEventListener('click', (e) => {

    var name = document.getElementById('regName').value;
    var email = document.getElementById('regEmail').value;
    var password = document.getElementById('regPass').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        set(ref(database, 'users/' + user.uid), {
            name: name,
            email: email,
            password: password
        })
        .then(() => {
            // Data saved successfully!
            // alert("User Createrd Succesfully");
            $('.signup, .login').addClass('switched');

            setTimeout(function () { $('.signup, .login').hide(); }, 700);
            setTimeout(function () { $('.brand').addClass('active'); }, 300);
            setTimeout(function () { $('.heading').addClass('active'); }, 600);
            setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
            setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
            setTimeout(function () { $('.form').hide(); }, 700);
        })
        .catch((error) => {
            // The write failed...
            alert(error);
        });
        


        

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const errorMessageF = errorMessage.replace("Firebase:","");
        
        // ..
        // alert(errorMessage);
        setTimeout(function () { $('.toast').addClass('show'); }, 100);
        setTimeout(function () { $('.toast-body').text(errorMessageF); }, 80);
        setTimeout(function () { $('.toast').removeClass('show'); }, 5000);
        setTimeout(function () { location.reload(); }, 5500);
    
    });



});


btnLogin.addEventListener('click', (e) => {
    var loginEmail = document.getElementById('loginemail').value;
    var loginPassword = document.getElementById('loginpassword').value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        var lgdate = new Date();
        // ...
        update(ref(database, 'users/' + user.uid), {
            last_login: lgdate
        })
        .then(() => {
            // Data saved successfully!
            // alert("User Login Succesfully");
            $('.signup, .login').addClass('switched');

            setTimeout(function () { $('.signup, .login').hide(); }, 700);
            setTimeout(function () { $('.brand').addClass('active'); }, 300);
            setTimeout(function () { $('.heading').addClass('active'); }, 600);
            setTimeout(function () { $('.success-msg p').addClass('active').html('Login Succesfull' + '<br>' + 'Redirecting to Member Area...'); }, 900);
            // setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
            setTimeout(function () { $('.form').hide(); }, 700);
        })
        .catch((error) => {
            // The write failed...
            alert(error);
        });

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const errorMessageF = errorMessage.replace("Firebase:","");
        // alert(errorMessage);
        setTimeout(function () { $('.toast').addClass('show'); }, 100);
        setTimeout(function () { $('.toast-body').text(errorMessageF); }, 80);
        setTimeout(function () { $('.toast').removeClass('show'); }, 5000);
        setTimeout(function () { location.reload(); }, 5500);
        
        
    });


});


btnGlogin.addEventListener('click', (e) => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        alert(user.displayName);


    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
  });


});


