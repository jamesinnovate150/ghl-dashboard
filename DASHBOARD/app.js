// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAVDgvL3DUDCmUzma83hdpGXXND4lhlvUc",
  authDomain: "dashboard-150.firebaseapp.com",
  projectId: "dashboard-150",
  storageBucket: "dashboard-150.firebasestorage.app",
  messagingSenderId: "922751642787",
  appId: "1:922751642787:web:791ede0cc7d274187fe316",
  measurementId: "G-T9F11BKHCW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

// Sign Up function
function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

// Logout function
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// Protect dashboard
if (window.location.pathname.includes("dashboard.html")) {
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "index.html";
    }
  });
}
