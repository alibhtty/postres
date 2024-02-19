// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var firebaseConfig = {
  apiKey: "AIzaSyAvFS8Ub2XZz-kpVawQuDgKI1YUU8VJdPo",
  authDomain: "area-4b.firebaseapp.com",
  databaseURL: "https://area-4b-default-rtdb.firebaseio.com",
  projectId: "area-4b",
  storageBucket: "area-4b.appspot.com",
  messagingSenderId: "1064234590151",
  appId: "1:1064234590151:web:f61cddcd37a69740a683e2"
  /* apiKey: "XXXX",
  authDomain: "XXXX",
  databaseURL: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX",
  measurementId: "XXXX" */
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Background message received [firebase-messaging-sw.js]: ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/icons/192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

