import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
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

function checkUser () {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, you can access user information here
          const umail = user.email;
          const uname = user.displayName;
          const uphoneno = user.phoneNumber;
          const uphoto = user.photoURL;
          document.getElementById('profName').innerHTML = uname;
          document.getElementById('profEmail').innerHTML = umail;
          document.getElementById('profPhoneNo').innerHTML = uphoneno;
          document.getElementById('profPic').src = uphoto;
        } else {
          // User is not signed in, handle accordingly
        }
    });
};

function checkCookie() {
    var cookies = getAllCookies();
    checkUser(); 
    for (var cname in cookies) {
        const cvalue = cookies[cname];
        getToken(cname)
        .then((storedToken) => {
            // Now you can use the storedToken for further processing outside this function
            if(storedToken == undefined) {
                location.replace("./account.html");
            } else {
                // console.log('FBToken Display', storedToken);
                var offcan = document.getElementById('offcanvasib');
                var clsoffcan = document.getElementById('clsoffc');
                clsoffcan.click();
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

btnProf.addEventListener('click', (e) => {
    var offcan = document.getElementById('offcanvas-1');
    offcan.classList.toggle("show");   
});

btnOfcanSign.addEventListener('click', (e) => {
    window.location.replace('./account.html');
});

btnSout.addEventListener('click', (e) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        deleteAllCookies();
        setTimeout(function() {document.location.replace("./index.html");}, 2000); // 2000 milliseconds (2 seconds)
    }).catch((error) => {
        // An error happened.
    });
});

function deleteAllCookies() {
    // retrieve all cookies
    var Cookies = document.cookie.split(';');
    // set past expiry to all cookies
    for (var i = 0; i < Cookies.length; i++) {
        document.cookie = Cookies[i] + "=; expires="+ new Date(0).toUTCString();
    }  
};
