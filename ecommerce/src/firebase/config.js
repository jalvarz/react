
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxZ10nBQrXFa25hHlTPh0BzzRb73BrqtA",
  authDomain: "java-ecommerce-b66dc.firebaseapp.com",
  projectId: "java-ecommerce-b66dc",
  storageBucket: "java-ecommerce-b66dc.appspot.com",
  messagingSenderId: "106079110722",
  appId: "1:106079110722:web:0187a9b3725b691dff4fdb",
  measurementId: "G-15C3XH0F68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
  console.log("inicializado firebase");
    return app;
}