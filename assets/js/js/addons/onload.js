
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCg9myN_3UiCMe3SEEPsy45dYEgqiBgHKk",
    authDomain: "i-labcomputers.firebaseapp.com",
    databaseURL: "https://i-labcomputers-default-rtdb.firebaseio.com",
    projectId: "i-labcomputers",
    storageBucket: "i-labcomputers.appspot.com",
    messagingSenderId: "945886591619",
    appId: "1:945886591619:web:86e9af065d75c2247639b6",
    measurementId: "G-39WTC8YS17"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    const umail = user.email;
    const uname = user.displayName;
    const uphoneno = user.phoneNumber;
    const uphoto = photoURL;

    console.log(umail,uname,uphoneno,uphoto);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });



function checkCookie() {
    var cookies = getAllCookies();
    getRedirectResult();
    
    for (var name in cookies) {
        var value = cookies[name];
        console.log('CNAme Display', name);
        console.log('CToken Display', name);
        
        getToken(name)
        .then((storedToken) => {
            // Now you can use the storedToken for further processing outside this function
            if(storedToken == undefined) {
                location.replace("./account.html");

            } else {
                console.log('FBToken Display', storedToken);
            }        
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
};

function getToken(userId) {
    // Assuming the user's UID is known
    const userUid = userId;

    // Reference to the user's data in the database
    const userRef = ref(database, 'users/' + userUid);

    return new Promise((resolve, reject) => {
        // Listen for changes in the user's data
        onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                const storedToken = userData.Last_token;
                console.log("Stored Token:", storedToken);
                resolve(storedToken); // Resolve the Promise with the storedToken
            } else {
                reject(new Error("User data not found"));
            }
        }, (error) => {
            reject(error); // Reject the Promise if there's an error
        });
    });
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


document.onload = checkCookie();

setInterval(checkCookie, 60000);
