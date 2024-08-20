import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
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
    console.log('User is logged in');
  } else {
    console.log('User is signed out');
  }
});

let add_text = document.getElementById('add');
let btn = document.getElementById('btn');
let graph = document.getElementById('graph');
let Name = localStorage.getItem('name1');
// let date = new Date();

add_text.addEventListener('click', async () => {
  let paraElement = document.getElementById('para');
  let inputElement = document.getElementById('input-text');
  let input = inputElement.value;
  let para = paraElement.value;

  if (!auth.currentUser) {
    alert('You must be signed in to post! Please log in or sign up.');
    // window.location.href = 'signup.html';
    return;
  }


//   if (para && input) {
//     try {
//       const docRef = await addDoc(collection(db, "blog"), {
//         title: input,
//         Blog: para,
//         createdate: new Date().toISOString(),
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }

//     console.log(input);
//     console.log(para);
//     paraElement.value = '';
//     inputElement.value = '';
//   } else {
//     alert('Enter Your Title and Text');
//   }
// });

// setTimeout(async () => {
//   const querySnapshot = await getDocs(collection(db, "blog"));
//   querySnapshot.forEach((doc) => {
//     let adddata = doc.data();
//     console.log(adddata.Blog);
//     console.log(adddata.title);
//     console.log(adddata.createdate);
  
//     graph.innerHTML += `<div class="row justify-content-center">
//       <div class="col-auto">
//       <div class="card custom-card">
//         <div class="img"><img src="" alt=""></div>
//         <div class="card-body">
//           <h2 class="card-title">${adddata.title}</h2>
//           <h5 class="card-title">${Name}</h5>
//           <h6 class="card-title">${adddata.createdate}</h6>
//           <p class="card-text">${adddata.Blog}</p>
//           <a href="#" class="btn btn-primary">Edit</a>
//           <a class="btn btn-primary remove-text" data-id="${doc.id}">Delete</a>
//         </div>
//       </div>
//       </div>
//     </div>`;
//   });

//   //  delete button
//   const deleteButtons = document.querySelectorAll('.remove-text');
//   deleteButtons.forEach(button => {
//     button.addEventListener('click', async (e) => {
//       const docId = e.target.getAttribute('data-id'); 
//       try {
//         const docRef = doc(db, "blog", docId); 
//         await deleteDoc(docRef); 
//         console.log('Document successfully deleted.');
        
//         e.target.closest('.row').remove();
//       } catch (error) {
//         console.error('Error deleting document:', error);
//       }
//     });
//   });
// }, 1000);



// btn.addEventListener('click', () => {
//   signOut(auth).then(() => {
//     console.log('Sign-out successful.');
//     window.location.href = 'index.html';
//   }).catch((error) => {
//     console.log('An error happened.');
//   });
// });


// let btn_signup = document.getElementById('signup-btn');

// btn_signup.addEventListener('click', () => {
//   window.location.href = 'signup.html';

// });




















if (para && input) {
  try {
    const docRef = await addDoc(collection(db, "blog"), {
      title: input,
      Blog: para,
      createdate: new Date().toISOString(),
      uid: auth.currentUser.uid // Store the user's UID
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  console.log(input);
  console.log(para);
  paraElement.value = '';
  inputElement.value = '';
} else {
  alert('Enter Your Title and Text');
}

});



setTimeout(async () => {
  const querySnapshot = await getDocs(collection(db, "blog"));
  querySnapshot.forEach((doc) => {
    let adddata = doc.data();
    const isOwner = adddata.uid === auth.currentUser.uid; // Check if the post belongs to the current user
    console.log(adddata.Blog);
    console.log(adddata.title);
    console.log(adddata.createdate);

    graph.innerHTML += `<div class="row justify-content-center">
      <div class="col-auto">
      <div class="card custom-card">
        <div class="img"><img src="" alt=""></div>
        <div class="card-body">
          <h2 class="card-title">${adddata.title}</h2>
          <h5 class="card-title">${Name}</h5>
          <h6 class="card-title">${adddata.createdate}</h6>
          <p class="card-text">${adddata.Blog}</p>
          ${isOwner ? `<a href="#" class="btn btn-primary edit-text" data-id="${doc.id}">Edit</a>` : ''}
          ${isOwner ? `<a class="btn btn-primary remove-text" data-id="${doc.id}">Delete</a>` : ''}
        </div>
      </div>
      </div>
    </div>`;
  });

  //  delete button
  const deleteButtons = document.querySelectorAll('.remove-text');
  deleteButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      const docId = e.target.getAttribute('data-id'); 
      try {
        const docRef = doc(db, "blog", docId); 
        await deleteDoc(docRef); 
        console.log('Document successfully deleted.');
        
        e.target.closest('.row').remove();
      } catch (error) {
        console.error('Error deleting document:', error);
      }
    });
  });

  // edit button
  const editButtons = document.querySelectorAll('.edit-text');
  editButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      const docId = e.target.getAttribute('data-id'); 
      try {
        const docRef = doc(db, "blog", docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          document.getElementById('input-text').value = data.title;
          document.getElementById('para').value = data.Blog;

          // Optionally update the document after editing
          document.getElementById('save-edit').addEventListener('click', async () => {
            await updateDoc(docRef, {
              title: document.getElementById('input-text').value,
              Blog: document.getElementById('para').value,
              updatedate: new Date().toISOString(),
            });
            console.log('Document successfully updated.');
            window.location.reload(); // Refresh the page to show the updated post
          });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error('Error editing document:', error);
      }
    });
  });
}, 1000);



onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = 'signup.html'; // Redirect to signup/login page
  }
});



btn.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('Sign-out successful.');
    window.location.href = 'index.html';
  }).catch((error) => {
    console.log('An error happened.');
  });
});


let btn_signup = document.getElementById('signup-btn');

btn_signup.addEventListener('click', () => {
  window.location.href = 'signup.html';

});


