
import { initializeApp } from "firebase/app";
import{ getAuth} from "firebase/auth"
import { getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCU41OE_t5pWSuKNGklTndtKe30MojpYlg",
  authDomain: "chat-app-8290a.firebaseapp.com",
  projectId: "chat-app-8290a",
  storageBucket: "chat-app-8290a.appspot.com",
  messagingSenderId: "876128977910",
  appId: "1:876128977910:web:eb489666499c9d2f00fdd7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();