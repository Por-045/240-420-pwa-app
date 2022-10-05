importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
apiKey: "AIzaSyAJF_AG26qNlMeZ9zCSWK8jSs1tLAIHCGs",
authDomain: "my-pwa-app-a08c2.firebaseapp.com",
databaseURL: "https://hello-world-pwa-8669c.firebaseio.com",
projectId: "my-pwa-app-a08c2",
storageBucket: "my-pwa-app-a08c2.appspot.com",
messagingSenderId: "916709297858",
appId: "1:916709297858:web:99f72c9973a1d935ccb55b",
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