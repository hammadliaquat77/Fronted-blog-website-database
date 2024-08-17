// Signup login page shift
let sign_up = document.getElementById('Sign-up')
let login = document.getElementById('login')
let form_signup = document.getElementById('form-signup')
let form_login = document.getElementById('form-login')



login.addEventListener('click', ()=>  {
  form_signup.style.display='none'
  form_login.style.display='block'
})

sign_up.addEventListener('click', ()=>  {
  form_signup.style.display='block'
  form_login.style.display='none'
})




// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY3zwoBy9HfpsugbaS8BJbE4c-wf5BAl4",
  authDomain: "batch-11-3191d.firebaseapp.com",
  projectId: "batch-11-3191d",
  storageBucket: "batch-11-3191d.appspot.com",
  messagingSenderId: "1087219169012",
  appId: "1:1087219169012:web:6d73730016abb42edb90a1",
  measurementId: "G-D7P8TVB686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);





// signup  
let name = document.getElementById('name');
let Email = document.getElementById('email');
let password = document.getElementById('password');
let btn = document.getElementById('btn');



onAuthStateChanged(auth, (user) => {
  if (user) {
     // User is signed in, see docs for a list of available properties
     // https://firebase.google.com/docs/reference/js/auth.user
     const uid = user.uid;
     console.log('user is signed in');
     
     // ...
   } else {
     // User is signed out
     console.log('User is signed out');
     
     // ...
   }
 });
 


btn.addEventListener('click', function () {

   if (name.value  && Email.value  && password.value  ) {
      
   createUserWithEmailAndPassword(auth, Email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user");
    
    
        localStorage.setItem('name1', name.value)
        localStorage.setItem('Email1', Email.value)
        localStorage.setItem('password1', password.value)

    // ...
    console.log(name.value);
    console.log(Email.value);
    console.log(password.value);
  
    name.value= '';
    Email.value = '';
    password.value = '';
  
  form_signup.style.display='none'
  form_login.style.display='block'
  
  alert('Thanks for signup')

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
      


   }else{
    alert('Please fill in all fields to sign up.')   
   }

});







// login page

let login_email = document.getElementById('login-email');
let login_pass = document.getElementById('login-Pass');
let login_btn = document.getElementById('login-btn');

let user1 = localStorage.getItem('Email1')
let user2 = localStorage.getItem('password1')

login_btn.addEventListener('click', () => {

   if (login_email.value && login_pass.value) {


  //  if (login_email.value == user1 && login_pass.value == user2) {
      signInWithEmailAndPassword(auth, login_email.value, login_pass.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user');
        
        console.log(login_email.value);
        console.log(login_pass.value);
        
        alert('Your Account has been Logged In');
        login_email.value = '';
        login_pass.value = '';
  
        window.location.href ='dashboard.html'

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });         
    // }else{
    //   alert('Invalid email & Password')
    // }
   
      
   } else {
      alert('Please fill in all fields to login.');
   }
});
