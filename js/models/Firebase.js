const firebaseConfig = {

    apiKey: "AIzaSyBOtUsczUZj2LhJsojgkL8VDMMMh2tLGak",

    authDomain: "finalproject-25d00.firebaseapp.com",

    projectId: "finalproject-25d00",

    storageBucket: "finalproject-25d00.appspot.com",

    messagingSenderId: "746466169235",

    appId: "1:746466169235:web:25ae9c5c198f042aa75866",

    measurementId: "G-KQ7MJCWX57"

};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage().ref();