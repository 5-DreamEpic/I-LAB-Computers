
/*global $, document, window, setTimeout, navigator, console, location*/
$(document).ready(function () {

    'use strict';

    var usernameError = true,
        emailError    = true,
        passwordError = true,
        passConfirm   = true;

    // Detect browser for css purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
    }

    // Label effect
    $('input').focus(function () {

        $(this).siblings('label').addClass('active');
    });

    // Form validation
    $('input').blur(function () {

        // User Name
        if ($(this).hasClass('name')) {
            if ($(this).val().length === 0) {
                $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
                $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                usernameError = false;
            }
        }
        // Email
        if ($(this).hasClass('email')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
                emailError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                emailError = false;
            }
        }

        // PassWord
        if ($(this).hasClass('pass')) {
            if ($(this).val().length < 8) {
                $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
                passwordError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                passwordError = false;
            }
        }

        // PassWord confirmation
        if ($('.pass').val() !== $('.passConfirm').val()) {
            $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
            passConfirm = false;
        } else {
            $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
            passConfirm = false;
        }

        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // form switch
    $('a.switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('a.switch').hasClass('active')) {
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        }
    });


    // Form submit
    $('form.signup-form').submit(function (event) {
        event.preventDefault();

        if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
            $('.name, .email, .pass, .passConfirm').blur();
        } else {
            // $('.signup, .login').addClass('switched');

            // setTimeout(function () { $('.signup, .login').hide(); }, 700);
            // setTimeout(function () { $('.brand').addClass('active'); }, 300);
            // setTimeout(function () { $('.heading').addClass('active'); }, 600);
            // setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
            // setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
            // setTimeout(function () { $('.form').hide(); }, 700);
        }
    });

    // Reload page
    $('a.profile').on('click', function () {
        location.reload(true);
    });


});






// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";

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
const analytics = getAnalytics(app);

const auth = getAuth();
const database = getDatabase(app);


// My code

btnSignup.addEventListener('click', (e) => {

    var name = document.getElementById('username').value;
    var email = document.getElementById('usermail').value;
    var password = document.getElementById('userpass').value;

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
        // ..
        alert(errorMessage);
    
    });



});


btnSignin.addEventListener('click', (e) => {

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
        // alert(errorMessage);
        setTimeout(function () { $('.toast').addClass('show'); }, 100);
        setTimeout(function () { $('.toast-body').text(errorMessage); }, 80);
        setTimeout(function () { $('.toast').removeClass('show'); }, 5000);
        setTimeout(function () { location.reload(); }, 5500);
        
        
    });


});





