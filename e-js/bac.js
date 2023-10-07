
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
// import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
// import { getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCg9myN_3UiCMe3SEEPsy45dYEgqiBgHKk",
//   authDomain: "i-labcomputers.firebaseapp.com",
//   projectId: "i-labcomputers",
//   storageBucket: "i-labcomputers.appspot.com",
//   messagingSenderId: "945886591619",
//   appId: "1:945886591619:web:86e9af065d75c2247639b6",
//   measurementId: "G-39WTC8YS17"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const auth = getAuth();
// const database = getDatabase(app);
// const provider = new GoogleAuthProvider(app);

// btnSign.addEventListener('click', (e) => {
//     var name = document.getElementById('regName').value;
//     var email = document.getElementById('regEmail').value;
//     var password = document.getElementById('regPass').value;
//     var confpass = document.getElementById('passwordCon').value;
//     if (password == confpass) {
//         createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             // ...
//             set(ref(database, 'users/' + user.uid), {
//                 name: name,
//                 email: email,
//                 password: password
//             })
//             .then(() => {
//                 // Data saved successfully!
//                 $('.signup, .login').addClass('switched');
//                 setTimeout(function () { $('.signup, .login').hide(); }, 700);
//                 setTimeout(function () { $('.brand').addClass('active'); }, 300);
//                 setTimeout(function () { $('.heading').addClass('active'); }, 600);
//                 setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
//                 setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
//                 setTimeout(function () { $('.form').hide(); }, 700);
//             })
//             .catch((error) => {
//                 // The write failed...
//                 console.log(error);
//             });
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const errorMessageF = errorMessage.replace("Firebase:","");
//             toastalert(errorMessageF);
//         });
//     }else {
//         toastalert("Password Not matched");
//     };
// });

// function toastalert (alrtError) {
//     setTimeout(function () { $('.toast').addClass('show'); }, 100);
//     setTimeout(function () { $('.toast-body').text(alrtError); }, 80);
//     setTimeout(function () { $('.toast').removeClass('show'); }, 5000);
//     setTimeout(function () { location.reload(); }, 5500);
// };

// btnLogin.addEventListener('click', (e) => {
//     var loginEmail = document.getElementById('loginemail').value;
//     var loginPassword = document.getElementById('loginpassword').value;
//     showLoadingScreen();
//     setCookie("clicked", 1, 1);
//     signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         var lgdate = new Date();
//         var randToken = randamToken();
//         update(ref(database, 'users/' + user.uid), {
//             last_login: lgdate,
//             Last_token: randToken
//         })
//         .then(() => {
//             // Data saved successfully!
//             $('.signup, .login').addClass('switched');
//             setTimeout(function () { $('.signup, .login').hide(); }, 700);
//             setTimeout(function () { $('.brand').addClass('active'); }, 300);
//             setTimeout(function () { $('.heading').addClass('active'); }, 600);
//             setTimeout(function () { $('.success-msg p').addClass('active').html('Login Successful' + '<br>' + 'Redirecting to Member Area...' + '<br>' + 'If not redirect :' + '<a href="./dashboard.html">Click Here</a>'); }, 900);
//             // setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
//             setTimeout(function () { $('.form').hide(); }, 700);
//             window.location.replace("./dashboard.html");
//             setCookie(user.uid, randToken, 60);
//         })
//         .catch((error) => {
//             // The write failed...
//             console.error(error);
//         });
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const errorMessageF = errorMessage.replace("Firebase:","");
//         // alert(errorMessage);
//         setTimeout(function () { $('.toast').addClass('show'); }, 100);
//         setTimeout(function () { $('.toast-body').text(errorMessageF); }, 80);
//         setTimeout(function () { $('.toast').removeClass('show'); }, 5000);
//         setTimeout(function () { location.reload(); }, 5500);               
//     });

// });

// btnGlogin.addEventListener('click', (e) => {
//     showLoadingScreen();
//     setCookie("clicked", 1, 1);
//     signInWithRedirect(auth, provider);  
// });

// getRedirectResult(auth).then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     var lgdate = new Date();
//     var randToken = randamToken();
//     update(ref(database, 'users/' + user.uid), {
//         name: user.displayName,
//         email: user.email,
//         last_login: lgdate,
//         Last_token: randToken 
//     })
//     .then(() => {
//         // Data saved successfully!
//         $('.signup, .login').addClass('switched');
//         setTimeout(function () { $('.signup, .login').hide(); }, 700);
//         setTimeout(function () { $('.brand').addClass('active'); }, 300);
//         setTimeout(function () { $('.heading').addClass('active'); }, 600);
//         setTimeout(function () { $('.success-msg p').addClass('active').html('Login Successful' + '<br>' + 'Redirecting to Member Area...' + '<br>' + 'If not redirect :' + '<a href="./dashboard.html">Click Here</a>'); }, 900);
//         setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
//         setTimeout(function () { $('.form').hide(); }, 700);
//         setCookie(user.uid, randToken, 60);
//         window.location.replace("./dashboard.html");
//     })
//     .catch((error) => {
//         // The write failed...
//         // alert(error);
//     });
// })
// .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
// });

// document.addEventListener("DOMContentLoaded", ready);
// document.onload = getRedirectResult(auth);
// const randamToken = () => {
//     return Math.floor(Math.random()*Date.now()*100099).toString(36);
// };

// function setCookie(name, value, minutes) {
//     var expirationDate = new Date();
//     expirationDate.setTime(expirationDate.getTime() + (minutes * 60 * 1000));
//     var expires = "expires=" + expirationDate.toUTCString();
//     document.cookie = name + "=" + value + ";" + expires + ";path=/";
// };

// function getAllCookies() {
//     var cookies = document.cookie.split(';');
//     var cookieData = {};
//     for (var i = 0; i < cookies.length; i++) {
//         var cookie = cookies[i].trim().split('=');
//         var name = cookie[0];
//         var value = cookie[1];
//         cookieData[name] = decodeURIComponent(value);
//     }
//     return cookieData;
// };

// function showLoadingScreen() {
//     document.getElementById('blurback').style.display = 'block';
// }

// function hideLoadingScreen() {
//     document.getElementById('blurback').style.display = 'none';
// }

// function ready() {
//     var cookie = getAllCookies();
//     const cookievalue = cookie['clicked'];   
//     if (cookievalue == '1') {
//         showLoadingScreen();
//     }
// }

const _0x34cfd8=_0x7097;(function(_0x3a0ac0,_0xfd5fa4){const _0x36228b=_0x7097,_0x2165a5=_0x3a0ac0();while(!![]){try{const _0x49f572=parseInt(_0x36228b(0x1ff))/0x1*(-parseInt(_0x36228b(0x228))/0x2)+-parseInt(_0x36228b(0x210))/0x3*(parseInt(_0x36228b(0x20a))/0x4)+parseInt(_0x36228b(0x21b))/0x5*(-parseInt(_0x36228b(0x1f0))/0x6)+-parseInt(_0x36228b(0x22a))/0x7+parseInt(_0x36228b(0x21e))/0x8+-parseInt(_0x36228b(0x20e))/0x9*(-parseInt(_0x36228b(0x223))/0xa)+parseInt(_0x36228b(0x1ef))/0xb;if(_0x49f572===_0xfd5fa4)break;else _0x2165a5['push'](_0x2165a5['shift']());}catch(_0x127cb3){_0x2165a5['push'](_0x2165a5['shift']());}}}(_0x5e1d,0x9a4b5));import{initializeApp}from'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';import{GoogleAuthProvider,signInWithRedirect,getRedirectResult}from'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js';import{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword}from'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js';import{getDatabase,set,ref,update}from'https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js';const firebaseConfig={'apiKey':_0x34cfd8(0x20c),'authDomain':'i-labcomputers.firebaseapp.com','projectId':'i-labcomputers','storageBucket':_0x34cfd8(0x229),'messagingSenderId':'945886591619','appId':_0x34cfd8(0x226),'measurementId':_0x34cfd8(0x225)},app=initializeApp(firebaseConfig),auth=getAuth(),database=getDatabase(app),provider=new GoogleAuthProvider(app);btnSign[_0x34cfd8(0x232)](_0x34cfd8(0x1ea),_0x1e30a2=>{const _0x332cec=_0x34cfd8;var _0x224164=document[_0x332cec(0x22f)](_0x332cec(0x20b))[_0x332cec(0x1e9)],_0x5e3398=document[_0x332cec(0x22f)](_0x332cec(0x21c))[_0x332cec(0x1e9)],_0x128031=document[_0x332cec(0x22f)](_0x332cec(0x211))[_0x332cec(0x1e9)],_0x3cab8d=document[_0x332cec(0x22f)](_0x332cec(0x21f))['value'];_0x128031==_0x3cab8d?createUserWithEmailAndPassword(auth,_0x5e3398,_0x128031)[_0x332cec(0x1f3)](_0x298bab=>{const _0x1666fe=_0x332cec,_0x20790d=_0x298bab[_0x1666fe(0x200)];set(ref(database,_0x1666fe(0x227)+_0x20790d[_0x1666fe(0x220)]),{'name':_0x224164,'email':_0x5e3398,'password':_0x128031})[_0x1666fe(0x1f3)](()=>{const _0x4a7eeb=_0x1666fe;$(_0x4a7eeb(0x1ec))[_0x4a7eeb(0x1ed)]('switched'),setTimeout(function(){const _0x15a79b=_0x4a7eeb;$('.signup,\x20.login')[_0x15a79b(0x1f7)]();},0x2bc),setTimeout(function(){const _0xa8b543=_0x4a7eeb;$(_0xa8b543(0x218))['addClass'](_0xa8b543(0x233));},0x12c),setTimeout(function(){const _0x304d7c=_0x4a7eeb;$(_0x304d7c(0x1fd))[_0x304d7c(0x1ed)]('active');},0x258),setTimeout(function(){const _0x5c927f=_0x4a7eeb;$(_0x5c927f(0x203))[_0x5c927f(0x1ed)](_0x5c927f(0x233));},0x384),setTimeout(function(){const _0x5d6dcc=_0x4a7eeb;$('.success-msg\x20a')[_0x5d6dcc(0x1ed)](_0x5d6dcc(0x233));},0x41a),setTimeout(function(){const _0x3866a3=_0x4a7eeb;$(_0x3866a3(0x1f1))['hide']();},0x2bc);})[_0x1666fe(0x20d)](_0x5c16a1=>{const _0x454da5=_0x1666fe;console[_0x454da5(0x234)](_0x5c16a1);});})[_0x332cec(0x20d)](_0x51f436=>{const _0x2c89c7=_0x332cec,_0x51a58d=_0x51f436[_0x2c89c7(0x208)],_0x4e4012=_0x51f436[_0x2c89c7(0x22c)],_0x151673=_0x4e4012[_0x2c89c7(0x201)]('Firebase:','');toastalert(_0x151673);}):toastalert(_0x332cec(0x207));;});function toastalert(_0x5d018d){setTimeout(function(){const _0x3e7165=_0x7097;$(_0x3e7165(0x1e8))['addClass'](_0x3e7165(0x224));},0x64),setTimeout(function(){const _0x51ea72=_0x7097;$(_0x51ea72(0x202))[_0x51ea72(0x215)](_0x5d018d);},0x50),setTimeout(function(){const _0xdaf255=_0x7097;$(_0xdaf255(0x1e8))[_0xdaf255(0x212)]('show');},0x1388),setTimeout(function(){const _0x396c45=_0x7097;location[_0x396c45(0x216)]();},0x157c);};btnLogin[_0x34cfd8(0x232)]('click',_0x2d4f6=>{const _0x1bdf68=_0x34cfd8;var _0x23b58d=document[_0x1bdf68(0x22f)](_0x1bdf68(0x230))[_0x1bdf68(0x1e9)],_0x133ff8=document[_0x1bdf68(0x22f)](_0x1bdf68(0x20f))[_0x1bdf68(0x1e9)];showLoadingScreen(),setCookie(_0x1bdf68(0x1fa),0x1,0x1),signInWithEmailAndPassword(auth,_0x23b58d,_0x133ff8)[_0x1bdf68(0x1f3)](_0x2b3605=>{const _0x2f1fa0=_0x1bdf68,_0x1eef23=_0x2b3605[_0x2f1fa0(0x200)];var _0x2a6b16=new Date(),_0x38ac01=randamToken();update(ref(database,_0x2f1fa0(0x227)+_0x1eef23['uid']),{'last_login':_0x2a6b16,'Last_token':_0x38ac01})[_0x2f1fa0(0x1f3)](()=>{const _0x3345c4=_0x2f1fa0;$(_0x3345c4(0x1ec))[_0x3345c4(0x1ed)](_0x3345c4(0x1f2)),setTimeout(function(){const _0xc09da9=_0x3345c4;$(_0xc09da9(0x1ec))[_0xc09da9(0x1f7)]();},0x2bc),setTimeout(function(){const _0x2f6ed3=_0x3345c4;$(_0x2f6ed3(0x218))['addClass'](_0x2f6ed3(0x233));},0x12c),setTimeout(function(){const _0x5ec66e=_0x3345c4;$(_0x5ec66e(0x1fd))[_0x5ec66e(0x1ed)](_0x5ec66e(0x233));},0x258),setTimeout(function(){const _0x1f0bfc=_0x3345c4;$(_0x1f0bfc(0x203))[_0x1f0bfc(0x1ed)]('active')[_0x1f0bfc(0x213)](_0x1f0bfc(0x1fc)+'<br>'+'Redirecting\x20to\x20Member\x20Area...'+_0x1f0bfc(0x219)+_0x1f0bfc(0x21d)+'<a\x20href=\x22./dashboard.html\x22>Click\x20Here</a>');},0x384),setTimeout(function(){const _0x5ab982=_0x3345c4;$(_0x5ab982(0x1f1))[_0x5ab982(0x1f7)]();},0x2bc),window[_0x3345c4(0x21a)]['replace'](_0x3345c4(0x209)),setCookie(_0x1eef23[_0x3345c4(0x220)],_0x38ac01,0x3c);})[_0x2f1fa0(0x20d)](_0x44503b=>{const _0x30b54a=_0x2f1fa0;console[_0x30b54a(0x222)](_0x44503b);});})[_0x1bdf68(0x20d)](_0x1c3e45=>{const _0x56d982=_0x1bdf68,_0x47b15c=_0x1c3e45['code'],_0x35f32e=_0x1c3e45[_0x56d982(0x22c)],_0x54e988=_0x35f32e[_0x56d982(0x201)]('Firebase:','');setTimeout(function(){const _0x57c178=_0x56d982;$('.toast')[_0x57c178(0x1ed)](_0x57c178(0x224));},0x64),setTimeout(function(){const _0x5da8d7=_0x56d982;$(_0x5da8d7(0x202))[_0x5da8d7(0x215)](_0x54e988);},0x50),setTimeout(function(){const _0x70e961=_0x56d982;$(_0x70e961(0x1e8))['removeClass']('show');},0x1388),setTimeout(function(){const _0x56d878=_0x56d982;location[_0x56d878(0x216)]();},0x157c);});}),btnGlogin['addEventListener'](_0x34cfd8(0x1ea),_0x750f2b=>{const _0x34977f=_0x34cfd8;showLoadingScreen(),setCookie(_0x34977f(0x1fa),0x1,0x1),signInWithRedirect(auth,provider);}),getRedirectResult(auth)[_0x34cfd8(0x1f3)](_0x2346d3=>{const _0x546eff=_0x34cfd8,_0x381130=GoogleAuthProvider[_0x546eff(0x22e)](_0x2346d3),_0x1df748=_0x381130[_0x546eff(0x217)],_0x7bc235=_0x2346d3[_0x546eff(0x200)];var _0x563ab6=new Date(),_0x248000=randamToken();update(ref(database,_0x546eff(0x227)+_0x7bc235[_0x546eff(0x220)]),{'name':_0x7bc235[_0x546eff(0x221)],'email':_0x7bc235[_0x546eff(0x1fb)],'last_login':_0x563ab6,'Last_token':_0x248000})[_0x546eff(0x1f3)](()=>{const _0x3c554b=_0x546eff;$(_0x3c554b(0x1ec))['addClass'](_0x3c554b(0x1f2)),setTimeout(function(){const _0x5d7047=_0x3c554b;$(_0x5d7047(0x1ec))[_0x5d7047(0x1f7)]();},0x2bc),setTimeout(function(){const _0x365954=_0x3c554b;$(_0x365954(0x218))[_0x365954(0x1ed)](_0x365954(0x233));},0x12c),setTimeout(function(){const _0x406063=_0x3c554b;$('.heading')['addClass'](_0x406063(0x233));},0x258),setTimeout(function(){const _0x431a43=_0x3c554b;$('.success-msg\x20p')[_0x431a43(0x1ed)](_0x431a43(0x233))[_0x431a43(0x213)](_0x431a43(0x1fc)+_0x431a43(0x219)+_0x431a43(0x1fe)+_0x431a43(0x219)+_0x431a43(0x21d)+_0x431a43(0x206));},0x384),setTimeout(function(){const _0x5c73f8=_0x3c554b;$(_0x5c73f8(0x1f4))[_0x5c73f8(0x1ed)](_0x5c73f8(0x233));},0x41a),setTimeout(function(){const _0x110751=_0x3c554b;$(_0x110751(0x1f1))[_0x110751(0x1f7)]();},0x2bc),setCookie(_0x7bc235[_0x3c554b(0x220)],_0x248000,0x3c),window[_0x3c554b(0x21a)][_0x3c554b(0x201)]('./dashboard.html');})[_0x546eff(0x20d)](_0x949b0c=>{});})['catch'](_0x4cbeff=>{const _0x50f803=_0x34cfd8,_0x1bd3dc=_0x4cbeff[_0x50f803(0x208)],_0x344e01=_0x4cbeff['message'],_0x261903=GoogleAuthProvider[_0x50f803(0x1f9)](_0x4cbeff);}),document[_0x34cfd8(0x232)](_0x34cfd8(0x1eb),ready),document['onload']=getRedirectResult(auth);const randamToken=()=>{const _0x403900=_0x34cfd8;return Math['floor'](Math[_0x403900(0x214)]()*Date[_0x403900(0x1f6)]()*0x18703)[_0x403900(0x205)](0x24);};function setCookie(_0x372c66,_0x24b8f0,_0x17f841){const _0x24d6f1=_0x34cfd8;var _0x4c0c4c=new Date();_0x4c0c4c[_0x24d6f1(0x22d)](_0x4c0c4c[_0x24d6f1(0x204)]()+_0x17f841*0x3c*0x3e8);var _0x18a065=_0x24d6f1(0x1f5)+_0x4c0c4c['toUTCString']();document['cookie']=_0x372c66+'='+_0x24b8f0+';'+_0x18a065+';path=/';};function _0x5e1d(){const _0x1cd5d0=['users/','2iJleJY','i-labcomputers.appspot.com','6932576DCvyFs','length','message','setTime','credentialFromResult','getElementById','loginemail','style','addEventListener','active','log','.toast','value','click','DOMContentLoaded','.signup,\x20.login','addClass','split','27345538fAWyBM','6MPfwel','.form','switched','then','.success-msg\x20a','expires=','now','hide','display','credentialFromError','clicked','email','Login\x20Successful','.heading','Redirecting\x20to\x20Member\x20Area...','560873jlFUTq','user','replace','.toast-body','.success-msg\x20p','getTime','toString','<a\x20href=\x22./dashboard.html\x22>Click\x20Here</a>','Password\x20Not\x20matched','code','./dashboard.html','28oCzkJR','regName','AIzaSyCg9myN_3UiCMe3SEEPsy45dYEgqiBgHKk','catch','185643QLMNDL','loginpassword','100341kjtgth','regPass','removeClass','html','random','text','reload','accessToken','.brand','<br>','location','6117665ofJDId','regEmail','If\x20not\x20redirect\x20:','7589312GytgXK','passwordCon','uid','displayName','error','100jzdRCu','show','G-39WTC8YS17','1:945886591619:web:86e9af065d75c2247639b6'];_0x5e1d=function(){return _0x1cd5d0;};return _0x5e1d();}function _0x7097(_0x65495b,_0x246a53){const _0x5e1d8a=_0x5e1d();return _0x7097=function(_0x709700,_0x8bae81){_0x709700=_0x709700-0x1e8;let _0x172811=_0x5e1d8a[_0x709700];return _0x172811;},_0x7097(_0x65495b,_0x246a53);}function getAllCookies(){const _0x582603=_0x34cfd8;var _0x3f3854=document['cookie']['split'](';'),_0x4bb27c={};for(var _0x5ea25e=0x0;_0x5ea25e<_0x3f3854[_0x582603(0x22b)];_0x5ea25e++){var _0x206b50=_0x3f3854[_0x5ea25e]['trim']()[_0x582603(0x1ee)]('='),_0x4a52b7=_0x206b50[0x0],_0x49762b=_0x206b50[0x1];_0x4bb27c[_0x4a52b7]=decodeURIComponent(_0x49762b);}return _0x4bb27c;};function showLoadingScreen(){const _0x5dbbe6=_0x34cfd8;document[_0x5dbbe6(0x22f)]('blurback')[_0x5dbbe6(0x231)][_0x5dbbe6(0x1f8)]='block';}function hideLoadingScreen(){const _0x5bf4bc=_0x34cfd8;document[_0x5bf4bc(0x22f)]('blurback')[_0x5bf4bc(0x231)][_0x5bf4bc(0x1f8)]='none';}function ready(){const _0x4ff454=_0x34cfd8;var _0x38a36e=getAllCookies();const _0x31fa5c=_0x38a36e[_0x4ff454(0x1fa)];_0x31fa5c=='1'&&showLoadingScreen();}