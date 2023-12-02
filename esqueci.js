import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdoHZj9mTCOHnOaX3_O6Nb5RAvFavFOsw",
  authDomain: "carp-35c47.firebaseapp.com",
  projectId: "carp-35c47",
  storageBucket: "carp-35c47.appspot.com",
  messagingSenderId: "799450051275",
  appId: "1:799450051275:web:b4f20befc643865f01a14e",
  measurementId: "G-DF1334VWF6"
};
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  document.querySelector('#botao').addEventListener('click', () => {

    var email = document.getElementById('email').value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Resert!');
            window.location.href = 'index.html';
          
        })
        .catch((error) => {
            alert('Por favor, preencha todos os campos.');
        });
  })