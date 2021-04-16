importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js");

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
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    // Customize notification here
    var notification = payload.notification;
    var notificationTitle = notification.title;
    var notificationOptions = {
        body: notification.body,
        icon: "/static/images/logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});