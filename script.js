var employeeName = 0;
var role = 0;
var startDate = 0;
var monthsW = 0;
var rate = 0;
var billed = 0;

var firebaseConfig = {
    apiKey: "AIzaSyA0m089wIXO9AD0TYfXilrFDhNj3SOxWi0",
    authDomain: "third-project-912fe.firebaseapp.com",
    databaseURL: "https://third-project-912fe.firebaseio.com",
    projectId: "third-project-912fe",
    storageBucket: "third-project-912fe.appspot.com",
    messagingSenderId: "330870989085",
    appId: "1:330870989085:web:74be5b4c01db4281"
 };
 firebase.initializeApp(config);
var database = firebase.database();