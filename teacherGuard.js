import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeXxlaxk1nCVQ9k8tMiEs9o-EcLrkTSPE",
  authDomain: "iskolar-website.firebaseapp.com",
  projectId: "iskolar-website",
  appId: "1:1034904541958:web:39eee81131f0a09a991c87"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "signin.html";
    return;
  }

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await signOut(auth);
    window.location.href = "signin.html";
    return;
  }

  const data = userSnap.data();

  if (data.accountType !== "teacher" && data.accountType !== "admin") {
    window.location.href = "studentsign-in.html";
    return;
  }

  if (data.accountType === "teacher" && data.status === "pending") {
    window.location.href = "pendingApproval.html";
    return;
  }

  if (data.accountType === "teacher" && data.status === "declined") {
    alert("Your teacher account application was declined.");
    await signOut(auth);
    window.location.href = "signin.html";
    return;
  }
});