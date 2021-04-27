import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}


//Iniciar o firebase
export function firebaseClient() {
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials);
     }else {
        firebase.app()
    }
}


// Se der merda, trocar por esse:

/*
if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
 }else {
    firebase.app()
}
*/





export function autenticacao (email, pass, nome) {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(data => {
        const db = firebase.firestore(); // Iniciando o banco de dados
        const uid = data.user.uid;

        const users = db.collection("users");
        users.doc(uid).set({
            email: email, nome: nome
        })

        window.location.href = "/home";
        alert("Tudo OK"); //Remover depois
        return true;
    })
    .catch(error => {
        alert("Error: ", error); // Remover depois
        return false;
    })
}


