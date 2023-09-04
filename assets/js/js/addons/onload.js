
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
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



    // const user = auth.currentUser;
    // if (user !== null) {

    //     // The user object has basic properties such as display name, email, etc.
    //     const user = result.user;
    //     const umail = user.email;
    //     const uname = user.displayName;
    //     const uphoneno = user.phoneNumber;
    //     const uphoto = photoURL;

    //     document.getElementById('profName').innerHTML = uname;
    //     document.getElementById('profEmail').innerHTML = umail;
    //     document.getElementById('profPhoneNo').innerHTML = uphoneno;
    //     document.getElementById('profPic').src = uphoto;
    //     const emailVerified = user.emailVerified;

    //     // The user's ID, unique to the Firebase project. Do NOT use
    //     // this value to authenticate with your backend server, if
    //     // you have one. Use User.getToken() instead.
    //     const uid = user.uid;
    // }
    // else {
    //     console.log("empty");
    // }

};



// getRedirectResult(auth, GoogleAuthProvider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     const umail = user.email;
//     const uname = user.displayName;
//     const uphoneno = user.phoneNumber;
//     const uphoto = photoURL;

//     document.getElementById('profName').innerHTML = uname;
//     document.getElementById('profEmail').innerHTML = umail;
//     document.getElementById('profPhoneNo').innerHTML = uphoneno;
//     document.getElementById('profPic').src = uphoto;
    

//     console.log(umail,uname,uphoneno,uphoto);
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     // const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });



function checkCookie() {
    var cookies = getAllCookies();
    checkUser();
    
    for (var name in cookies) {
        var value = cookies[name];
        console.log('CNAme Display', name);
        console.log('CToken Display', name);
        
        getToken(name)
        .then((storedToken) => {
            // Now you can use the storedToken for further processing outside this function
            if(storedToken == undefined) {
                // location.replace("./account.html");

            } else {
                // console.log('FBToken Display', storedToken);
                var offcan = document.getElementById('offcanvas-1');
                offcan.classList.toggle("show");
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
