import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDyEH02iQZnpm3q7ebdJl5gyoqv3Um7hM",
  authDomain: "taiwolf-5a279.firebaseapp.com",
  databaseURL: "https://taiwolf-5a279-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "taiwolf-5a279",
  storageBucket: "taiwolf-5a279.firebasestorage.app",
  messagingSenderId: "154565480180",
  appId: "1:154565480180:web:22400fd7bc383b7bbc18a1"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
