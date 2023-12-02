
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, push  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";


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
const db = getDatabase(app);


document.querySelector('#botao').addEventListener('click', () => {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var tell = document.getElementById('tell').value;
    var mesa = document.getElementById('mesa').value;
    var date = document.getElementById('date').value;
    var hora = document.getElementById('hora').value;

    push(ref(db, 'reserva'), {
        name: name,
        email: email,
        tell : tell,
        mesa : mesa,
        date : date,
        hora : hora,

      })
        .then((userCredential) => {
            // Enviar os dados para o database
            
            alert('Dados enviados com sucesso!');
            //window.location.href = 'https://carp-35c47-default-rtdb.firebaseio.com';

        })
        .catch((error) => {
            alert('alguma coisa deu errado.');
        });
})

  