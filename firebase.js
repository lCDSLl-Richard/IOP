import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAMwia5ciouEeM1ESA9ZQ68Jd1rH4GINo",
  authDomain: "iopoop.firebaseapp.com",
  projectId: "iopoop",
  storageBucket: "iopoop.appspot.com",
  messagingSenderId: "822857389044",
  appId: "1:822857389044:web:868539ba3d20e353655fa1",
  measurementId: "G-4JWVHEC2QE",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const colRef = collection(db, "pile-1");

const URL = "http://192.168.154.49";
// const URL = "localhost:2000";

export const start = () => {
  setInterval(async () => {
    const response = await fetch(URL);
    if (!response) {
      console.log("Connection failed");
      return;
    }
    const text = await response.text();
    console.log(text);
    const humidity = text.split(" ")[0];
    const temperature = text.split(" ")[1];
    const date = new Date();
    console.log(humidity, temperature, date);

    addDoc(colRef, { temperature, humidity, date });
    console.log("working");
  }, 10000);
};

export const getData = (func) => onSnapshot(colRef, func);
