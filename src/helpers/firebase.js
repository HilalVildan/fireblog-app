// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,  onAuthStateChanged,  sendPasswordResetEmail,  signInWithEmailAndPassword,  signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, push, ref, remove, set, update } from "firebase/database";
import {  toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "./toastNotify";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO_HvyOiGGkew_RgfYyNU7oqze8cEMuVA",
  authDomain: "fireblog-app-23c0d.firebaseapp.com",
  databaseURL: "https://fireblog-app-23c0d-default-rtdb.firebaseio.com",
  projectId: "fireblog-app-23c0d",
  storageBucket: "fireblog-app-23c0d.appspot.com",
  messagingSenderId: "987434177819",
  appId: "1:987434177819:web:5a66fe3f19961b76c56fbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default app;

  





export const createUser = async (email, password, navigate) => {
  try {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    toastSuccessNotify("Registered successfully");
    console.log(userCredential);
  } catch (error) {
    toastErrorNotify(error.message);
  }
};


export const signInWithGoogle = (navigate) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result);
      navigate("/");
      toastSuccessNotify("Logged in successfully!");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

//! Email/password ile girişi enable yap
export const signIn = async (email, password, navigate) => {
  try {
    //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
    await signInWithEmailAndPassword(auth, email, password);
    console.log("girildi");
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};



export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      const { email } = user;
      setCurrentUser({ email });
    } else {
      console.log("user logged out");
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  signOut(auth);
  console.log("cikildi")
  toastSuccessNotify("Logged out successfully!");
};

export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      toastWarnNotify("please check your mail box");
    })
    .catch((error) => {
      toastErrorNotify(error);
    });
};




// veri ekleme
export const AddCard = (newCard, cards) =>{

  console.log(newCard, cards);
    const db =  getDatabase(app);
    
    const blogRef = ref(db, "blogcard/")
    const newBlogRef = push(blogRef);


    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
  

    set(newBlogRef, {
        title: newCard.title,
        image: newCard.image,
        content: newCard.content,
        date:today,
        author: localStorage.getItem("currentUser")

    } );

  
  toastSuccessNotify("Added Successfully");

}

// Veriyi Silme

export const DeleteCard = (id) => {
  const db = getDatabase(app);
  remove(ref(db, "blogcard/" + id));
  toastSuccessNotify("Deleted Successfully");
};



// Veriyi Değiştirme

export const UpdateCard = (cards) => {
  const db = getDatabase(app);
  const updates = {};

  updates["blogcard/" + cards.id] = cards;

  return update(ref(db), updates);
};
