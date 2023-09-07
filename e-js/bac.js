
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
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

btnSign.addEventListener('click', (e) => {
    var name = document.getElementById('regName').value;
    var email = document.getElementById('regEmail').value;
    var password = document.getElementById('regPass').value;
    var confpass = document.getElementById('passwordCon').value;
    if (password == confpass) {
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
                console.log(error);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const errorMessageF = errorMessage.replace("Firebase:","");
            toastalert(errorMessageF);
        });
    }else {
        toastalert("Password Not matched");
    };
});

function toastalert (alrtError) {
    setTimeout(function () { $('.toast').addClass('show'); }, 100);
    setTimeout(function () { $('.toast-body').text(alrtError); }, 80);
    setTimeout(function () { $('.toast').removeClass('show'); }, 5000);
    setTimeout(function () { location.reload(); }, 5500);
};

btnLogin.addEventListener('click', (e) => {
    var loginEmail = document.getElementById('loginemail').value;
    var loginPassword = document.getElementById('loginpassword').value;
    showLoadingScreen();
    setCookie("clicked", 1, 1);
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        var lgdate = new Date();
        var randToken = randamToken();
        update(ref(database, 'users/' + user.uid), {
            last_login: lgdate,
            Last_token: randToken
        })
        .then(() => {
            // Data saved successfully!
            $('.signup, .login').addClass('switched');
            setTimeout(function () { $('.signup, .login').hide(); }, 700);
            setTimeout(function () { $('.brand').addClass('active'); }, 300);
            setTimeout(function () { $('.heading').addClass('active'); }, 600);
            setTimeout(function () { $('.success-msg p').addClass('active').html('Login Successful' + '<br>' + 'Redirecting to Member Area...' + '<br>' + 'If not redirect :' + '<a href="./dashboard.html">Click Here</a>'); }, 900);
            // setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
            setTimeout(function () { $('.form').hide(); }, 700);
            window.location.replace("./dashboard.html");
            setCookie(user.uid, randToken, 60);
        })
        .catch((error) => {
            // The write failed...
            console.error(error);
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
    showLoadingScreen();
    setCookie("clicked", 1, 1);
    signInWithRedirect(auth, provider);  
});

getRedirectResult(auth).then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    var lgdate = new Date();
    var randToken = randamToken();
    update(ref(database, 'users/' + user.uid), {
        name: user.displayName,
        email: user.email,
        last_login: lgdate,
        Last_token: randToken 
    })
    .then(() => {
        // Data saved successfully!
        $('.signup, .login').addClass('switched');
        setTimeout(function () { $('.signup, .login').hide(); }, 700);
        setTimeout(function () { $('.brand').addClass('active'); }, 300);
        setTimeout(function () { $('.heading').addClass('active'); }, 600);
        setTimeout(function () { $('.success-msg p').addClass('active').html('Login Successful' + '<br>' + 'Redirecting to Member Area...' + '<br>' + 'If not redirect :' + '<a href="./dashboard.html">Click Here</a>'); }, 900);
        setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
        setTimeout(function () { $('.form').hide(); }, 700);
        setCookie(user.uid, randToken, 60);
        window.location.replace("./dashboard.html");
    })
    .catch((error) => {
        // The write failed...
        // alert(error);
    });
})
.catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});

document.addEventListener("DOMContentLoaded", ready);
document.onload = getRedirectResult(auth);
const randamToken = () => {
    return Math.floor(Math.random()*Date.now()*100099).toString(36);
};

function setCookie(name, value, minutes) {
    var expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (minutes * 60 * 1000));
    var expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

function getAllCookies() {
    var cookies = document.cookie.split(';');
    var cookieData = {};
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim().split('=');
        var name = cookie[0];
        var value = cookie[1];
        cookieData[name] = decodeURIComponent(value);
    }
    return cookieData;
};

function showLoadingScreen() {
    document.getElementById('blurback').style.display = 'block';
}

function hideLoadingScreen() {
    document.getElementById('blurback').style.display = 'none';
}

function ready() {
    var cookie = getAllCookies();
    const cookievalue = cookie['clicked'];   
    if (cookievalue == '1') {
        showLoadingScreen();
    }
}