var firebaseConfig = {
    apiKey: "AIzaSyANpIdbR8U0_b2h0IE536IdFDsl-lHEQiY",
    authDomain: "keiba-fcm.firebaseapp.com",
    projectId: "keiba-fcm",
    storageBucket: "keiba-fcm.appspot.com",
    messagingSenderId: "283628198223",
    appId: "1:283628198223:web:1f8c94548f66387e5acd3a",
    measurementId: "G-2QG93JVSYP",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// console.log('messaging created');
messaging.usePublicVapidKey("BMLO9TM1OggRYu0onyJBOiF0kjPiBnAPANnDUoUAC6_4s1YjwSCmKwj5AmAyHUOzJ3BmUl9uulMfjR6HqCNOA64");