
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
//   import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
//   import { getFirestore, collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";


//   const firebaseConfig = {
//     apiKey: "AIzaSyDY3zwoBy9HfpsugbaS8BJbE4c-wf5BAl4",
//     authDomain: "batch-11-3191d.firebaseapp.com",
//     projectId: "batch-11-3191d",
//     storageBucket: "batch-11-3191d.appspot.com",
//     messagingSenderId: "1087219169012",
//     appId: "1:1087219169012:web:6d73730016abb42edb90a1",
//     measurementId: "G-D7P8TVB686"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const auth = getAuth(app);
//   const db = getFirestore(app);


//   // const storage = getStorage(app);
//   // const storageRef = ref(storage);





//   onAuthStateChanged(auth, (user) => {
//     if (user) {
    

//       const uid = user.uid;
//       console.log('user is loggend in');
      
//       // ...
//     } else {
//       // User is signed out
//       console.log('User is signed out');
      
//       // ...
//     }
//   });




// let add_text = document.getElementById('add');
// let btn = document.getElementById('btn');
// let graph = document.getElementById('graph');






// add_text.addEventListener('click', async ()=> {

//   let paraElement = document.getElementById('para');
//   let inputElement = document.getElementById('input-text');
//   // let imageElement = document.getElementById('img');
  
  
//   let input = inputElement.value
//   let para = paraElement.value
//   // let image = imageElement.files
  
  
  
  
  
//   try {
//     const docRef = await addDoc(collection(db, "blog"), {
//       title: input ,
//       Blog: para,
      
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
  
//   console.log(input);
//   console.log(para);
  
  
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     //  console.log(`${doc.id} => ${doc.data()}`);
//     let adddata = doc.data()
//     console.log(adddata.Blog);
//     console.log(adddata.title);
    
   
    
//     if (para && input ) {
      
      
//       graph.innerHTML += `<div class="row justify-content-center">
//     <div class="col-auto">
//     <div class="card custom-card">
    
//     <div class="img">
//     <img src="" alt="">
//     </div>
//     <div class="card-body">
//     <h5 class="card-title">${input}</h5>
//     <p class="card-text">${para}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//     <a href="" class="btn btn-primary" id='delete'>Delete</a>
//     </div>
//     </div>
//     </div>
    
//     </div>`
      
//       paraElement.value = ''
//       inputElement.value = ''
//       // imageElement.value = ''
      
//     }else{
//       alert('Enter Your Title and Text')
//     }
    
    
//   });
  
// });
  



























  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getFirestore, collection, addDoc, getDocs, deleteDoc  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";


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
  const db = getFirestore(app);



  onAuthStateChanged(auth, (user) => {
    if (user) {
    

      const uid = user.uid;
      console.log('user is loggend in');
      
      // ...
    } else {
      // User is signed out
      console.log('User is signed out');
      
      // ...
    }
  });




let add_text = document.getElementById('add');
let btn = document.getElementById('btn');
let graph = document.getElementById('graph');

let Name = localStorage.getItem('name1');
let date= new Date();




add_text.addEventListener('click', async ()=> {

  let paraElement = document.getElementById('para');
  let inputElement = document.getElementById('input-text');
  // let imageElement = document.getElementById('img');
  
  
  let input = inputElement.value
  let para = paraElement.value
  // let image = imageElement.files
  
   
    
    if (para && input ) {
      

       
  
  try {
    const docRef = await addDoc(collection(db, "blog"), {
      title: input,
      Blog: para,
      
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
  console.log(input);
  console.log(para);
  

    paraElement.value = ''
    inputElement.value = ''
  
  
  // const querySnapshot = await getDocs(collection(db, "blog"));
  // querySnapshot.forEach((doc) => {
  //   //  console.log(`${doc.id} => ${doc.data()}`);
  //   let adddata = doc.data()
  //   console.log(adddata.Blog);
  //   console.log(adddata.title);
    
    
  //   graph.innerHTML += `<div class="row justify-content-center">
  //   <div class="col-auto">
  //   <div class="card custom-card">
    
  //   <div class="img">
  //   <img src="" alt="">
  //   </div>
  //   <div class="card-body">
  //   <h2 class="card-title">${adddata.title}</h2>
  //   <h5 class="card-title">${Name}</h5>
  //   <h6 class="card-title">${date}</h6>
  //   <p class="card-text">${adddata.Blog}</p>
  //   <a href="#" class="btn btn-primary">Go somewhere</a>
  //   <a class="btn btn-primary" id='remove-text'>Delete</a>
  //   </div>
  //   </div>
  //   </div>
    
  //   </
  //   div>`
    
  //   paraElement.value = ''
  //   inputElement.value = ''
  //   // imageElement.value = ''
  // })
  }
  
    
    else{
      alert('Enter Your Title and Text')
    }
    
    
  });





setTimeout( async ()=> {

  const querySnapshot = await getDocs(collection(db, "blog"));
  querySnapshot.forEach((doc) => {
    //  console.log(`${doc.id} => ${doc.data()}`);
    let adddata = doc.data()
    console.log(adddata.Blog);
    console.log(adddata.title);
    
    
    graph.innerHTML += `<div class="row justify-content-center">
    <div class="col-auto">
    <div class="card custom-card">
    
    <div class="img">
    <img src="" alt="">
    </div>
    <div class="card-body">
    <h2 class="card-title">${adddata.title}</h2>
    <h5 class="card-title">${Name}</h5>
    <h6 class="card-title">${date}</h6>
    <p class="card-text">${adddata.Blog}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <a class="btn btn-primary" id='remove-text'>Delete</a>
    </div>
    </div>
    </div>
    
    </
    div>`
    
    // paraElement.value = ''
    // inputElement.value = ''
    // imageElement.value = ''
    
    
  })
  
}, 1000)

  

 
btn.addEventListener('click', ()=>{

  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('Sign-out successful.');
    
    window.location.href='index.html'

    }).catch((error) => {
      // An error happened.
      console.log('An error happened.');
      
    });
})




let cutter = document.getElementById('remove-text');

cutter.addEventListener('click', async  (e)=> {

  // e.parentElement.remove();
  await deleteDoc(doc(db, "blog"));

  
});




