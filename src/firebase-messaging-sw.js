importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
apiKey: "AIzaSyAJF_AG26qNlMeZ9zCSWK8jSs1tLAIHCGs",
authDomain: "my-pwa-app-a08c2.firebaseapp.com",
databaseURL: "https://my-pwa-app-a08c2-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "my-pwa-app-a08c2",
storageBucket: "my-pwa-app-a08c2.appspot.com",
messagingSenderId: "916709297858",
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});