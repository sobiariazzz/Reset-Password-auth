
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAjG-PPayWk4_VakL92e8Fcj7yQnHn9Ils",
    authDomain: "auth-53182.firebaseapp.com",
    projectId: "auth-53182",
    storageBucket: "auth-53182.firebasestorage.app",
    messagingSenderId: "337278273683",
    appId: "1:337278273683:web:6dbf215da6ff55358e2566",
    measurementId: "G-4KM32XYWJZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // sign-up page

  document.getElementById("signup-btn")?.addEventListener("click" , (e) =>{
    e.preventDefault();
    let email = document.getElementById("signup-email").value ;
    let password = document.getElementById("signup-password").value ;

    createUserWithEmailAndPassword(auth , email , password)
    .then(()=>{
        alert("Sign-up Successfull.");
        window.location.href = "welcome.html"

    })
    .catch((error) =>{
        alert(error.message);
    })
  })

  // login page

  document.getElementById("login-btn")?.addEventListener("click" , (e) =>{
    e.preventDefault();
    let email = document.getElementById("login-email").value ;
    let password = document.getElementById("login-password").value ;

    signInWithEmailAndPassword(auth , email , password)
    .then(()=>{
        alert("login Successfull.");
        window.location.href = "welcome.html"

    })
    .catch((error) =>{
        alert(error.message);
    })
  })

// continue with google

document.getElementById("google-btn")?.addEventListener("click" , (e) =>{
    e.preventDefault();
    signInWithPopup(auth , provider)
    .then(()=>{
        alert("login Successfully!")
        window.location.href = "welcome.html"
    })
    .catch((error) =>{
        alert(error.message);
    })
})

// logout 

document.getElementById("logout-btn")?.addEventListener("click" , (e)=> {
    e.preventDefault();
    signOut(auth)
    .then(() =>{
        alert("logout Successfully");
        window.location.href = "index.html"
    })
    .catch((error) =>{
        alert(error.message);
    })

})

onAuthStateChanged (auth , (user)=>{
    if(user && window.location.pathname.includes("welcome.html")){
        document.getElementById("user-email").textContent = user.email;
    }
    else if (!user && window.location.pathname.includes("welome.html")){
        window.location.href = "index.html";
    }
})