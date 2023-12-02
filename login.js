// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdoHZj9mTCOHnOaX3_O6Nb5RAvFavFOsw",
    authDomain: "carp-35c47.firebaseapp.com",
    projectId: "carp-35c47",
    storageBucket: "carp-35c47.appspot.com",
    messagingSenderId: "799450051275",
    appId: "1:799450051275:web:b4f20befc643865f01a14e",
    measurementId: "G-DF1334VWF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
document.querySelector('#botao').addEventListener('click', () => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Enviar os dados para o servidor aqui
            console.log(email)
            alert('Dados enviados com sucesso!');
            window.location.href = 'logado.html';

        })
        .catch((error) => {
            alert('Por favor, preencha todos os campos.');
        });
})
